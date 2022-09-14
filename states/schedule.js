import { atom, selector } from 'recoil';

const scheduleState = atom({
  key: 'scheduleState',
  default: {
    date: '',
    time: '',
  },
});

const getSchedule = selector({
  key: 'getSchedule',
  get: ({ get }) => {
    return get(scheduleState);
  },
});

export { scheduleState, getSchedule };
