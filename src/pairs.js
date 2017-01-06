// @flow
/* eslint arrow-body-style: ["error", "always"]*/

export const cons = (x, y) => {
  return (func) => { return func(x, y); };
};

export const car = (func) => {
  return func((x) => { return x; });
};

export const cdr = (func) => {
  return func((x, y) => { return y; });
};

