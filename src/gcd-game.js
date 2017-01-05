// @flow
/* eslint-disable no-console */

import game from '../index';
import { cons, car, cdr } from './pairs';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const iterCurrent = 3;

const getNumbers = (count) => {
  let result;
  switch (count) {
    case 0:
      result = cons(25, 50);
      break;
    case 1:
      result = cons(100, 52);
      break;
    default:
      result = cons(3, 9);
      break;
  }
  return result;
};

const getQuestion = (count) => { return `${car(getNumbers(count))} ${cdr(getNumbers(count))}`;
};

const getAnswer = (count) => {
  const iter = (a, b) => {
    if (a !== 0 && b !== 0) {
      if (a > b) {
        return iter(a % b, b);
      }
      return iter(b % a, a);
    }
    return a + b;
  };
  const result = iter(car(getNumbers(count)), cdr(getNumbers(count)));
  return `${result}`;
};

export default () => { game(ruleGame, iterCurrent, getAnswer, getQuestion); };
