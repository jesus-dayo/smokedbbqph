import { ArrowCircleRightIcon, BackspaceIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Address from '../components/Address/Address';
import Button from '../components/Button/Button';
import {
  createAddress,
  createBill,
  createClient,
  createOrder,
  createDelivery,
  createPaymentOption,
  updateAvailability,
} from '../src/graphql/mutations';
import { getConfig } from '../src/graphql/queries';
import TotalSummary from '../components/TotalSummary/TotalSummary';
import Layout from '../components/Layout/Layout';
import PersonalDetails from '../components/PersonalDetails/PersonalDetails';
import { useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { orderState } from '../states/orders';
import { generateBillNumber } from '../utils/util';
import { Amplify, API } from 'aws-amplify';
import { personalState } from '../states/personal';
import { addressState } from '../states/address';
import validateCheckOut from '../utils/validation';
import { scheduleState } from '../states/schedule';
import awsExports from '../src/aws-exports';
import PaymentOption from '../components/PaymentOption/PaymentOption';
import { paymentOptionState } from '../states/paymentOption';
import { productState } from '../states/product';
import { PENDING } from '../common/status';
import { CITY } from '../common/city';
import useMaxOrders from '../hooks/useMaxOrders';
import { event } from 'nextjs-google-analytics';

Amplify.configure({ ...awsExports, ssr: true });

const Checkout = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const orders = useRecoilValue(orderState);
  const personal = useRecoilValue(personalState);
  const address = useRecoilValue(addressState);
  const schedule = useRecoilValue(scheduleState);
  const paymentOption = useRecoilValue(paymentOptionState);
  const [currentConfig, setCurrentConfig] = useState({});
  const products = useRecoilValue(productState);
  const [checkoutInProgress, setCheckoutInProgress] = useState(false);
  const resetOrders = useResetRecoilState(orderState);
  const resetPersonal = useResetRecoilState(personalState);
  const resetAddress = useResetRecoilState(addressState);
  const resetSchedule = useResetRecoilState(scheduleState);
  const resetPaymentOption = useResetRecoilState(paymentOptionState);
  const [discountCode, setDiscountCode] = useState(null);
  const max = useMaxOrders(schedule?.id);

  useEffect(() => {
    event('checkout_page', {
      category: 'Checkout',
    });
    const getConfigAPI = async () => {
      const config = await API.graphql({
        query: getConfig,
        variables: {
          id: 'config',
        },
      });
      setCurrentConfig(config?.data?.getConfig);
    };
    getConfigAPI();
  }, []);

  const getShippingFee = () => {
    const foundCity = CITY.find((city) => city.label === address?.city);
    if (!foundCity) {
      return 0;
    }
    return foundCity.shippingFee;
  };

  const validate = (e, fieldName) => {
    if (!e.target.value) {
      setErrors([...errors, fieldName]);
    } else {
      setErrors([...errors.filter((item) => item !== fieldName)]);
    }
  };

  const handleBackToOrders = () => {
    router.push('/order');
  };

  const handleSubmitOrders = async () => {
    setCheckoutInProgress(true);
    const billNumber = generateBillNumber();
    const clientResponse = await API.graphql({
      query: createClient,
      variables: {
        input: {
          name: personal.name,
          email: personal.email,
          phoneNumber: personal.phoneNumber,
        },
      },
    });
    const addressResponse = await API.graphql({
      query: createAddress,
      variables: {
        input: {
          houseNo: address.houseNo,
          street: address.street,
          barangay: address.barangay,
          city: address.city,
          postalCode: address.postalCode,
        },
      },
    });
    const deliveryResponse = await API.graphql({
      query: createDelivery,
      variables: {
        input: {
          scheduleId: schedule.id,
          date: schedule.date,
          time: `${schedule.range?.start}-${schedule.range?.end}`,
        },
      },
    });
    const paymentOptionResponse = await API.graphql({
      query: createPaymentOption,
      variables: {
        input: {
          option: paymentOption,
        },
      },
    });

    await Promise.all(
      orders?.map((order) =>
        API.graphql({
          query: createOrder,
          variables: {
            input: {
              productId: order.productId,
              label: order.label,
              quantity: order.quantity,
              price: order.price,
              billOrdersId: billNumber,
              isFrozen: order.isFrozen,
            },
          },
        })
      )
    );
    orders?.forEach(async (order) => {
      const product = products?.find((prod) => prod.id === order?.productId);
      const availability = product?.availability?.items?.find(
        (avail) => avail.date === schedule.date
      );
      const request = {
        id: availability?.id,
        quantity: order?.availableQuantity - order?.quantity,
      };
      await API.graphql({
        query: updateAvailability,
        variables: {
          input: { ...request },
        },
      });
    });

    const billInput = {
      id: billNumber,
      billClientId: clientResponse.data?.createClient?.id,
      billAddressId: addressResponse.data?.createAddress?.id,
      billDeliveryId: deliveryResponse.data?.createDelivery?.id,
      billPaymentOptionId: paymentOptionResponse.data?.createPaymentOption?.id,
      status: PENDING,
      shippingFee: getShippingFee(),
      email: personal.email,
      deliveryDate: schedule.date,
    };

    if (discountCode) {
      billInput.discountCode = discountCode;
    } else {
      delete billInput.discountCode;
    }

    await API.graphql({
      query: createBill,
      variables: {
        input: {
          ...billInput,
        },
      },
    });
    router.push(`/confirmation/${billNumber}`);
    resetAddress();
    resetOrders();
    resetPaymentOption();
    resetPersonal();
    resetSchedule();
    setCheckoutInProgress(false);
  };

  return (
    <Layout medium>
      <div className="p-4 md:pt-10 flex justify-center md:justify-between">
        <Button
          variant="secondary"
          className="h-10 text-sm md:h-10 md:text-sm md:align-middle"
          onClick={handleBackToOrders}
          disabled={checkoutInProgress}
        >
          <div className="flex gap-2 md:gap-2">
            <div className="w-6 md:w-6">
              <BackspaceIcon />
            </div>
            <div className="md:pt-1">Back to Orders</div>
          </div>
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmitOrders}
          disabled={
            !orders ||
            orders?.length === 0 ||
            !validateCheckOut({ address, personal }) ||
            checkoutInProgress
          }
          className="hidden md:block text-sm h-10 md:text-sm md:h-10"
        >
          <div className="flex gap-2">
            <div className="text-right">Submit Order</div>
            <div className="w-6 md:w-6">
              <ArrowCircleRightIcon />
            </div>
          </div>
        </Button>
      </div>
      <div className=" text-white h-auto md:w-full text-center md:pl-5 md:pr-5 md:pb-2 pb-2">
        <div className="w-full text-center md:text-left">
          <h5 className="font-bold text-xs md:text-sm">
            Note: As of now, we only accept GCASH and Cash On Delivery (COD) as
            mode of payment.
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 md:w-full min-h-0 overflow-auto h-auto md:h-auto">
          <div className="md:h-auto">
            <PaymentOption
              gcashNo={currentConfig.gcash}
              disabled={checkoutInProgress}
            />
            <PersonalDetails
              className="md:w-full"
              validate={validate}
              errors={errors}
              disabled={checkoutInProgress}
            />
            <Address
              className="md:w-full w-full"
              validate={validate}
              errors={errors}
              disabled={checkoutInProgress}
            />
          </div>
          <div className="md:h-full">
            <TotalSummary
              className="md:w-full"
              shippingFee={getShippingFee()}
              max={max}
              setTotalDiscountCode={setDiscountCode}
              disabled={checkoutInProgress}
            />
          </div>
        </div>
        <div className="p-2 mb-2">
          <Button
            variant="primary"
            onClick={handleSubmitOrders}
            disabled={
              !orders ||
              orders?.length === 0 ||
              !validateCheckOut({ address, personal }) ||
              checkoutInProgress
            }
            className="mt-2 mb-2 md:hidden text-sm h-10 md:text-sm md:h-10"
          >
            <div className="flex gap-2">
              <div className="text-right">Submit Order</div>
              <div className="w-6 md:w-6">
                {!checkoutInProgress && <ArrowCircleRightIcon />}
                {checkoutInProgress && (
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
