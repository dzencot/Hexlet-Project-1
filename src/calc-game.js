// @flow
/* eslint-disable no-console */
/* eslint arrow-body-style: ["error", "always"]*/
// Игра "Калькулятор"

import game from '..';
import random from './functions/random';
import calc from './functions/mathResult';

export default () => {
  const getOperator = () => {
    switch (random(1, 4)) {
      case 1:
        return '+';
      case 2:
        return '-';
      case 3:
        return '*';
      default:
        return '/';
    }
  };

  const getQuestion = () => {
    return {
      operator: getOperator(),
      number1: random(1, 100),
      number2: random(1, 100),
    };
  };

  const viewQuestion = (question) => {
    return `${question.number1} ${question.operator} ${question.number2}`;
  };

  const getAnswer = (question) => {
    const result = calc(question.operator, question.number1, question.number2);
    return `${result}`;
  };

  const ruleGame = 'What is the result of the expression?';

  return game(ruleGame,
    getAnswer,
    getQuestion,
    viewQuestion);
};

