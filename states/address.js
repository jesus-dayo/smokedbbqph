import { atom, selector } from 'recoil';
import { CITY } from '../common/city';

const addressState = atom({
  key: 'addressState',
  default: {
    houseNo: '',
    street: '',
    barangay: '',
    city: CITY[0].label,
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
