// @flow
/* eslint-disable no-console */
/* eslint arrow-body-style: ["error", "always"]*/

import { cons, car, cdr } from 'hexlet-pairs';
import game from '../index';

// Функция, вызывающая логику игры
export default () => {
  const ruleGame = 'Find the greatest common divisor of given numbers.';
  // вопрос
  const getQuestion = () => {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    return cons(number1, number2);
  };

  // показываем вопрос
  const viewQuestion = (question) => {
    const number1 = car(question);
    const number2 = cdr(question);
    return `${number1} ${number2}`;
  };

  // вычисляем ответ
  const getAnswer = (question) => {
    const number1 = car(question);
    const number2 = cdr(question);
    const iter = (a, b) => {
      if (a !== 0 && b !== 0) {
        if (a > b) {
          return iter(a % b, b);
        }
        return iter(b % a, a);
      }
      return a + b;
    };
    return `${iter(number1, number2)}`;
  };
  return game(ruleGame, getAnswer, getQuestion, viewQuestion);
};

