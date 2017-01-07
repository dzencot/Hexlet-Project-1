// @flow
/* eslint-disable no-console */
/* eslint no-param-reassign: ["error", { "props": false}]*/
/* eslint arrow-body-style: ["error", "always"]*/

import game from '../index';

// Функция, вызывающая логику игры
export default () => {
  // генерация вопроса
  const getQuestion = () => {
    return Math.floor(Math.random() * (9901)) + 100;
  };

  // получение ответа
  const getAnswer = (number) => {
    // число в строку
    const numbers = String(number).split('');
    // функция для сортировки
    const funcSort = (a, b) => {
      return a > b;
    };
    // сортируем и сравниваем концы
    // если надо, складываем-вычитаем концы
    const funcIter = (acc) => {
      // слишком короткую строку не обрабатываем
      if (acc.length === 1) {
        return acc;
      }
      if (+acc[acc.length - 1] > +acc[0] + 1) {
        acc[acc.length - 1] = +acc[acc.length - 1] - 1;
        acc[0] = +acc[0] + 1;
        return funcIter(acc.sort(funcSort));
      }
      return acc.join('');
    };
    return funcIter(numbers.sort(funcSort));
  };
  // Правила игры
  const ruleGame = 'Balance the given number';

  return game(ruleGame,
    getAnswer,
    getQuestion,
    (number) => {
      return number;
    });
};
