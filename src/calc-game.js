// @flow
/* eslint-disable no-console */

import game from '../index';

const ruleGame = () => {
  const result = 'What is the result of the expression?';
  return result;
};

const iterCurrent = () => {
  const result = 3;
  return result;
};

const questions = (iter) => {
  let result;
  switch (iter) {
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

const answers = (iter) => {
  let result;
  switch (iter) {
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

const getCorrectAnswer = (iter) => {
  const result = answers(iter);
  return result;
};

const getQuestion = (iter) => {
  const result = questions(iter);
  return result;
};

export default () => { game(ruleGame, iterCurrent, getCorrectAnswer, getQuestion); };
