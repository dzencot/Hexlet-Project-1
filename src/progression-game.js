// @flow
/* eslint-disable no-console */
/* eslint arrow-body-style: ["error", "always"]*/

import game from '.';
import random from './functions/random';
import calc from './functions/mathResult';

export default () => {
  const getQuestion = () => {
    return {
      operator: random(1, 2) === 1 ? '+' : '-',
      iter: random(1, 10),
      start: random(1, 100),
      hideNumber: random(1, 10),
    };
  };

  const getAnswer = (answer) => {
    const funcIter = (iter, acc) => {
      if (iter >= answer.hideNumber) {
        return acc;
      }
      return funcIter(iter + 1, calc(answer.operator, acc, answer.iter));
    };
    const result = funcIter(0, answer.start);
    return `${result}`;
  };

  const viewAnswer = (answer) => {
    console.log(answer.start, answer.operator, answer.iter);
    const funcIter = (iter, acc) => {
      if (iter >= 10) {
        return acc;
      }
      acc.push(calc(answer.operator, +acc[acc.length - 1], answer.iter));
      return funcIter(iter + 1, acc);
    };
    const result = funcIter(0, [answer.start]);
    result[answer.hideNumber] = '..';
    return result.join(' ');
  };

  const ruleGame = 'What number is missing in this progression?';

  return game(ruleGame,
    getAnswer,
    getQuestion,
    viewAnswer);
};
