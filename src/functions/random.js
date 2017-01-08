// @flow
/* eslint arrow-body-style: ["error", "always"]*/

export default (min, max) => {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

