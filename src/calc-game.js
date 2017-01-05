// @flow
/* eslint-disable no-console */

import game from '../index';

const ruleGame = 'What is the result of the expression?';

const iterCurrent = 3;

const questions = (count) => {
  let result;
  switch (count) {
    case 0:
      result = '4 + 10';
      break;
    case 1:
      result = '25 - 11';
      break;
    default:
      result = '25 * 7';
      break;
  }
  return result;
};

const answers = (count) => {
  let result;
  switch (count) {
    case 0:
      result = '14';
      break;
    case 1:
      result = '14';
      break;
    default:
      result = '175';
      break;
  }
  return result;
};

export default () => { game(ruleGame, iterCurrent, answers, questions); };
