import currencyFormatter from 'currency-formatter';

export const cls = (input) =>
  input
    .replace(/\s+/gm, ' ')
    .split(' ')
    .filter((cond) => typeof cond === 'string')
    .join(' ')
    .trim();

export const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const convertToPHP = (value) => {
  if (value === 0) {
    return value;
  }
  return currencyFormatter.format(value, { code: 'PHP' });
};
