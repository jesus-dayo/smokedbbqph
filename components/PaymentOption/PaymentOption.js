import Image from "next/image";
import { useRecoilState } from 'recoil';
import { paymentOptionState } from '../../states/paymentOption';
import FormContainer from '../FormContainer/FormContainer';

const PaymentOption = ({ className, gcashNo, disabled }) => {
  const [paymentOption, setPaymentOption] = useRecoilState(paymentOptionState);

  const onChangeValue = (e) => {
    setPaymentOption(e.target.value);
  };
  return (
    <FormContainer className={className}>
      <div>
        <h1 className="text-left font-bold text-sm md:text:lg uppercase ">
          Select Payment Option
        </h1>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-start gap-1 md:gap-10 p-2 md:p-0">
          <div className="p-2 text-left">
            <input
              type="radio"
              value="cash"
              checked={paymentOption === 'cash'}
              name="cash"
              onChange={onChangeValue}
              disabled={disabled}
            />
            &nbsp; Cash On Delivery
            {paymentOption === 'cash' && (
              <div className="text-blue-500 text-sm text-left">
                We will call you to confirm how much change we should bring.
              </div>
            )}
          </div>
          <div className="p-2 text-left">
            <input
              type="radio"
              value="gcash"
              checked={paymentOption === 'gcash'}
              name="gcash"
              onChange={onChangeValue}
              disabled={disabled}
            />{' '}
            GCash
            {paymentOption === 'gcash' && (
              <div className="text-blue-500 text-sm text-left relative">
                <p>
                  GCASH Payment Details will display once you reached the
                  confirmation page.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default PaymentOption;
