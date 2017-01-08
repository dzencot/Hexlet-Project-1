// @flow
/* eslint-disable no-console */
/* eslint arrow-body-style: ["error", "always"]*/

import game from '..';
import random from './functions/random';

export default () => {
  const getQuestion = () => {
    return random(100, 99999);
  };

  const getAnswer = (number) => {
    const numbers = String(number).split('');
    const funcSort = (a, b) => {
      return +a > +b;
    };
    // сортируем и сравниваем концы
    // если надо, складываем-вычитаем концы
    const funcIter = (acc) => {
      if (acc.length === 1) {
        return acc;
      }
      if (+acc[acc.length - 1] > +acc[0] + 1) {
        const firstNum = +acc.shift();
        const lastNum = +acc.pop();
        acc.push(String(lastNum - 1));
        acc.unshift(String(firstNum + 1));
        return funcIter(acc.sort(funcSort));
      }
      return acc.join('');
    };
    return funcIter(numbers.sort(funcSort));
  };
  const ruleGame = 'Balance the given number';

  return game(ruleGame,
    getAnswer,
    getQuestion,
    (number) => {
      return number;
    });
};

