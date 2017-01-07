// @flow
/* eslint-disable no-console */
/* eslint no-param-reassign: ["error", { "props": false}]*/
/* eslint arrow-body-style: ["error", "always"]*/
// Игра "Баланс"

import { cons, car, cdr } from 'hexlet-pairs';
import game from '../index';

// Правила игры
// "Найди сбалансированное число"
const ruleGame = 'Balance the given number.';

// Количество верных ответов
const iterCurrent = 3;

// инициируем список вопросов и ответов
let questions = null;

// опишем добавление вопроса и ответа
const addQuestion = (number) => {
  // вычисляем ответ
  // преобразуем число в строку
  const numbers = String(number).split('');
  // определим как будем сортировать
  const funcSort = (a, b) => { return a > b; };
  // алгоритм довольно простой: сортируем и сравнимаем концы
  // если надо, делаем +1 в начало и -1 в конец
  const funcIter = (acc) => {
    if (acc.length === 1) {
      return acc;
    }
    if (+acc[acc.length - 1] > +acc[0] + 1) {
      acc[acc.length - 1] = +acc[acc.length - 1] - 1;
      acc[0] = +acc[0] + 1;
      acc.sort(funcSort);
      return funcIter(acc);
    }
    return acc.join('');
  };

  const newQuestion = cons(number, funcIter(numbers.sort(funcSort)));

  // добавляем в начало
  questions = cons(newQuestion, questions);
  return 0;
};

// Функция, извлекающая пару(вопрос, ответ) под нужным номером, либо последнюю
const findQuestion = (count) => {
  const funcIter = (list, iter) => {
    if (iter === count || cdr(list) === null) {
      return car(list);
    }
    return funcIter(cdr(list), iter + 1);
  };

  return funcIter(questions, 0);
};

// Функция, извлекающая вопрос
const getQuestion = (count) => { return car(findQuestion(count)); };

// Функция, извлекающая ответ
// кстати, ответ должен быть строкой, чтобы сравнение ответов было однотипным
const getAnswer = (count) => { return `${cdr(findQuestion(count))}`; };


// Функция, вызывающая логику игры
export default () => {
  // добавляем вопросы
  addQuestion(355);
  addQuestion(4181);
  addQuestion(215);
  return game(ruleGame, iterCurrent, getAnswer, getQuestion);
};
