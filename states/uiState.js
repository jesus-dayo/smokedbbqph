import { atom, selector } from 'recoil';

const uiState = atom({
  key: 'uiState',
  default: {
    isQuantityLoading: false,
  },
});

const getUIState = selector({
  key: 'getUIState',
  get: ({ get }) => {
    return get(uiState);
  },
});

export { uiState, getUIState };
