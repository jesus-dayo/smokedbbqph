import { atom, selector } from 'recoil';

const addressState = atom({
  key: 'addressState',
  default: {
    houseNo: '',
    street: '',
    barangay: '',
    city: '',
    postalCode: '',
  },
});

const getAddress = selector({
  key: 'getAddress',
  get: ({ get }) => {
    return get(addressState);
  },
});

export { addressState, getAddress };
