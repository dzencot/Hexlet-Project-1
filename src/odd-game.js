// @flow
/* eslint-disable no-console */

import game from '../index';

const ruleGame = () => {
  const result = 'Answer "yes" if number odd otherwise answer "no".';
  return result;
};

const iterCurrent = () => {
  const result = 3;
  return result;
};

const questions = (iter) => {
  let result;
  switch (iter) {
    case 1:
      result = 6;
      break;
    default:
      result = 15;
      break;
  }
  return result;
};

const answers = (iter) => {
  let result;
  switch (iter) {
    case 1:
      result = 'yes';
      break;
    default:
      result = 'no';
      break;
  }
  return result;
};

const getQuestion = (iter) => {
  const result = questions(iter);
  return result;
};
const getAnswer = (iter) => {
  const result = answers(iter);
  return result;
};

export default () => { game(ruleGame, iterCurrent, getAnswer, getQuestion); };
