// @flow
/* eslint-disable no-console */

import game from '../index';

const ruleGame = 'Answer "yes" if number odd otherwise answer "no".';

const iterCurrent = 3;

const questions = (count) => {
  let result;
  switch (count) {
    case 1:
      result = 6;
      break;
    default:
      result = 15;
      break;
  }
  return result;
};

const answers = (count) => {
  let result;
  switch (count) {
    case 1:
      result = 'yes';
      break;
    default:
      result = 'no';
      break;
  }
  return result;
};


export default () => { game(ruleGame, iterCurrent, answers, questions); };
