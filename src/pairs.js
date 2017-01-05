// @flow

export const cons = (x, y) => {
  return (func) => { return func(x, y); }
};

export const car = (func) => {
  return func((x, y) => {return x; });
};

export const cdr = (func) => {
  return func((x, y) => {return y; });
};

