import { atom, selector } from 'recoil';

const scheduleState = atom({
  key: 'scheduleState',
  default: {
    date: '',
    range: '',
    quantity: 0,
  },
});

const getSchedule = selector({
  key: 'getSchedule',
  get: ({ get }) => {
    return get(scheduleState);
  },
});

export { scheduleState, getSchedule };
