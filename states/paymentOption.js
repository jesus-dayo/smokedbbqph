import { atom, selector } from 'recoil';

const paymentOptionState = atom({
  key: 'paymentOptionState',
  default: 'gcash',
});

const getPaymentOption = selector({
  key: 'getPaymentOption',
  get: ({ get }) => {
    return get(paymentOptionState);
  },
});

export { paymentOptionState, getPaymentOption };
