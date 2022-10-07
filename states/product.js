import { atom, selector } from 'recoil';

const productState = atom({
  key: 'productState',
  default: [],
});

const getProduct = selector({
  key: 'getProduct',
  get: ({ get }) => {
    return get(productState);
  },
});

export { productState, getProduct };
