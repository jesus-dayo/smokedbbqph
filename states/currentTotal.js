import { atom, selector } from 'recoil';

const currentTotalState = atom({
  key: 'currentTotalState',
  default: {
    totalAmount: 0.0,
    discountPercentage: 0.0,
  },
});

const getTotal = selector({
  key: 'getTotal',
  get: ({ get }) => {
    return get(currentTotalState);
  },
});

export { currentTotalState, getTotal };
