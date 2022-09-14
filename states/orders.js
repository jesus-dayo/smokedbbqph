import { atom, selector } from 'recoil';

const orderState = atom({
  key: 'orderState',
  default: [],
});

const getOrders = selector({
  key: 'getOrders',
  get: ({ get }) => {
    return get(orderState);
  },
});

export { orderState, getOrders };
