import { atom, selector } from 'recoil';

const personalState = atom({
  key: 'personalState',
  default: {
    name: '',
    phoneNumber: '',
    email: '',
  },
});

const getPersonal = selector({
  key: 'getPersonal',
  get: ({ get }) => {
    return get(personalState);
  },
});

export { personalState, getPersonal };
