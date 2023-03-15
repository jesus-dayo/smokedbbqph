import { useRecoilValue } from 'recoil';
import { orderState } from '../../states/orders';
import { convertToPHP } from '../../utils/util';
import Quantity from '../Quantity/Quantity';
import Image from 'next/image';
import useOrders from '../../hooks/useOrders';
import Button from '../Button/Button';
import { ArrowCircleUpIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import awsExports from '../../src/aws-exports';
import { Amplify, API } from 'aws-amplify';
import { getDiscountCode } from '../../src/graphql/queries';
import moment from 'moment';
import { s3Loader } from '../../common/s3-loader';

Amplify.configure({ ...awsExports, ssr: true });

const Row = ({
  quantity,
  label,
  price,
  imgSrc,
  description,
  availableQuantity,
  max,
  disabled,
}) => {
  const { order, handleAddQuantity, handleMinusQuantity } = useOrders({
    quantity,
    label,
    price,
    imgSrc,
    description,
    availableQuantity,
    max,
  });
  return (
    <tr key={order.label} className="border-t-cyan-700 border-2">
      <td className="text-left">
        <div className="text-sm">{order.label}</div>
      </td>
      <td width={'10%'} className="text-center">
        <div>
          <Quantity
            value={order.quantity}
            onAdd={handleAddQuantity}
            onMinus={handleMinusQuantity}
            id={order.label}
            disabled={disabled}
          />
        </div>
      </td>
      <td width={'20%'} className="text-right p-2 text-sm">
        {convertToPHP(order.price)}
      </td>
    </tr>
  );
};

const SUCCESS = 'SUCCESS';
const EXPIRED = 'EXPIRED';
const INVALID = 'INVALID';

const TotalSummary = ({
  className,
  shippingFee,
  max,
  setTotalDiscountCode,
  disabled,
}) => {
  const orders = useRecoilValue(orderState);
  const [discountCodeInProgress, setDiscountCodeInProgress] = useState(false);
  const [discountCode, setDiscountCode] = useState();
  const [discountCodeApplied, setDiscountCodeApplied] = useState();
  const [discountPercentage, setDiscountPercentage] = useState();

  const handleDiscountCode = (e) => {
    setDiscountCode(e.target.value);
    setDiscountCodeApplied(null);
    setDiscountPercentage(null);
    setTotalDiscountCode(null);
  };

  const apply = async () => {
    setDiscountCodeInProgress(true);
    const discountResponse = await API.graphql({
      query: getDiscountCode,
      variables: {
        id: discountCode,
      },
    });
    const response = discountResponse?.data?.getDiscountCode;
    if (response) {
      const { expiration, percentage } = response;
      const isExpired =
        moment().toDate() > moment(expiration, 'DD MMM YYYY').toDate();
      if (!isExpired) {
        setDiscountPercentage(percentage);
        setDiscountCodeApplied(SUCCESS);
        setTotalDiscountCode(response?.id);
      } else {
        setDiscountCodeApplied(EXPIRED);
      }
    } else {
      setDiscountCodeApplied(INVALID);
    }

    setDiscountCodeInProgress(false);
  };

  const getTotal = () =>
    orders.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      shippingFee
    );

  return (
    <div className="p-1 h-full">
      <div className="h-full rounded-lg bg-white shadow-lg md:p-4 p-4 text-gray-700">
        <div>
          <h1 className="text-left font-bold text-sm md:text-lg uppercase">
            Shopping Cart
          </h1>
        </div>
        <div className="pt-2">
          <div className="text-left">
            <div className="font-bold text-sm text-left text-green-600">
              Discount Code
            </div>
            <div className="flex gap-2">
              <input
                className="md:h-8 px-3 py-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                type={'text'}
                data-cy={'test-discountCode'}
                maxLength={50}
                value={discountCode}
                onChange={handleDiscountCode}
                placeholder={'have a discount code?'}
                disabled={disabled}
              />
              {discountCode && (
                <Button
                  variant="green"
                  onClick={apply}
                  disabled={discountCodeInProgress || disabled}
                  className="text-sm md:text-sm"
                  size="small"
                >
                  <div className="flex gap-2">
                    <div className="text-right">Apply</div>
                    <div className="w-6 md:w-6">
                      {!discountCodeInProgress && <ArrowCircleUpIcon />}
                      {discountCodeInProgress && (
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
              )}
            </div>
            {discountCode && !discountCodeInProgress && (
              <div>
                {discountCodeApplied === SUCCESS && (
                  <span className="text-sm text-green-600">
                    Yey! {discountPercentage * 100}% Discount Code Applied
                    Successfully!
                  </span>
                )}
                {discountCodeApplied === EXPIRED && (
                  <span className="text-sm text-red-600">
                    Ooh No! Discount Code is already Expired!
                  </span>
                )}
                {discountCodeApplied === INVALID && (
                  <span className="text-sm text-red-600">
                    Sorry unfortunately the discount code is invalid.
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <table border={2} className="table-auto md:table-fixed">
          <thead className="text-sm">
            <th className="text-left">Product</th>
            <th className="text-center">Quantity</th>
            <th className="text-right p-2">Price</th>
          </thead>
          <tbody>
            {orders &&
              orders?.map((order, index) => (
                <Row
                  {...order}
                  key={`order-${index}`}
                  max={max}
                  disabled={disabled}
                />
              ))}
            {(!orders || orders?.length === 0) && (
              <tr>
                <td colSpan={5}>
                  Nothing on the cart. Please return to order page to re-order.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {orders && orders?.length > 0 && (
          <div className="flex flex-col justify-end">
            <div className="text-sm bg-white flex w-full justify-end">
              <div className="text-right">
                <div className="flex justify-end">
                  <div className="p-2">Sub Total:</div>
                  <div className="p-2">
                    {convertToPHP(
                      orders.reduce(
                        (prev, curr) => prev + curr.price * curr.quantity,
                        0
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="p-2 ">Shipping Fee:</div>
                  <div className="p-2">{convertToPHP(shippingFee)}</div>
                </div>
                <div className="text-xl bg-white flex gap-2 items-end justify-items-end justify-end">
                  <div
                    className={`p-2 ${
                      discountCodeApplied === SUCCESS
                        ? 'font-normal'
                        : 'font-bold'
                    } text-sm`}
                  >
                    Total:
                  </div>
                  <div className="p-2 text-sm">
                    <span
                      className={`${
                        discountCodeApplied === SUCCESS
                          ? 'line-through'
                          : 'underline'
                      }`}
                    >
                      {convertToPHP(getTotal())}
                    </span>
                  </div>
                </div>
                {discountCodeApplied === SUCCESS && (
                  <div className="text-xl bg-white flex gap-2 items-end justify-items-end justify-end">
                    <div className="p-2 font-bold text-sm">Discount:</div>
                    <div className="p-2 text-sm">
                      <span className="font-bold underline">
                        {convertToPHP(getTotal() * discountPercentage)}
                      </span>
                    </div>
                  </div>
                )}
                {discountCodeApplied === SUCCESS && (
                  <div className="text-xl bg-white flex gap-2 items-end justify-items-end justify-end">
                    <div className="p-2 font-bold text-sm">
                      Discounted Price:
                    </div>
                    <div className="p-2 text-sm">
                      <span className="font-bold underline">
                        {convertToPHP(
                          getTotal() - getTotal() * discountPercentage
                        )}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TotalSummary;
