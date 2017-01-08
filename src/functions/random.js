// @flow
/* eslint arrow-body-style: ["error", "always"]*/

// функция возвращает случайное целое число в диапазоне
export default (min, max) => {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};
