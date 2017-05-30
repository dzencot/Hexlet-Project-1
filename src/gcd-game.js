// @flow
/* eslint-disable no-console */
/* eslint arrow-body-style: ["error", "always"]*/

import game from '.';
import random from './functions/random';

export default () => {
  const ruleGame = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    return {
      number1: random(1, 100),
      number2: random(1, 100),
    };
  };

  const viewQuestion = (question) => {
    return `${question.number1} ${question.number2}`;
  };

  const getAnswer = (question) => {
    const iter = (a, b) => {
      if (a !== 0 && b !== 0) {
        if (a > b) {
          return iter(a % b, b);
        }
        return iter(b % a, a);
      }
      return a + b;
    };
    return `${iter(question.number1, question.number2)}`;
  };
  return game(ruleGame, getAnswer, getQuestion, viewQuestion);
};

