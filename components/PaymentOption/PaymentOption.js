import { useRecoilState } from 'recoil';
import { paymentOptionState } from '../../states/paymentOption';
import FormContainer from '../FormContainer/FormContainer';

const PaymentOption = ({ className, gcashNo }) => {
  const [paymentOption, setPaymentOption] = useRecoilState(paymentOptionState);

  const onChangeValue = (e) => {
    setPaymentOption(e.target.value);
  };

  return (
    <FormContainer className={className}>
      <div>
        <h1 className="text-left font-bold text:lg uppercase ">
          Select Payment Option
        </h1>
      </div>
      <div>
        <div className="flex justify-start gap-10 md:gap-10 p-2 md:p-0">
          <div className="p-2 text-left">
            <input
              type="radio"
              value="cash"
              checked={paymentOption === 'cash'}
              name="cash"
              onChange={onChangeValue}
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
              checked={paymentOption?.option === 'gcash'}
              name="gcash"
              onChange={onChangeValue}
            />{' '}
            GCash
            {paymentOption?.option === 'gcash' && (
              <div className="text-blue-500 text-sm text-left">
                <p>Pay GCash to {gcashNo} within 24hrs.</p>
                <p> You may send us a message at the same number once paid.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default PaymentOption;
