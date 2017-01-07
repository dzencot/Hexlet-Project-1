// @flow
/* eslint-disable no-console */
/* eslint arrow-body-style: ["error", "always"]*/

import { cons, car, cdr } from 'hexlet-pairs';
import game from '../index';

// Правила игры
// "Найди наидольший общий делитель"
const ruleGame = 'Find the greatest common divisor of given numbers.';

// Количество верных ответов
const iterCurrent = 3;

// инициируем список вопросов и ответов
let questions = null;

// опишем добавление вопроса и ответа
const addQuestion = (a, b) => {
  // вычисляем ответ
  const iter = (a, b) => {
    if (a !== 0 && b !== 0) {
      if (a > b) {
        return iter(a % b, b);
      }
      return iter(b % a, a);
    }
    return a + b;
  };
  const answer = iter(a, b);
  // вопрос-ответ хранится по типу
  // (('число1', 'число2')), 'ответ')
  const newQuestion = cons(cons(a, b), answer);

  // добавляем в начало
  questions = cons(newQuestion, questions);
  return 0;
};

//// Функция, извлекающая пару(вопрос, ответ) под нужным номером, либо последнюю
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
const getQuestion = (count) => {
  const number1 = car(car(findQuestion(count)));
  const number2 = cdr(car(findQuestion(count)));
  return `${number1} ${number2}`;
};

// Функция, извлекающая ответ
// кстати, ответ должен быть строкой, чтобы сравнение ответов было однотипным
const getAnswer = (count) => { return `${cdr(findQuestion(count))}`; };


// Функция, вызывающая логику игры
export default () => {
  // добавляем вопросы
  addQuestion(3, 9);
  addQuestion(100, 52);
  addQuestion(25, 50);
  return game(ruleGame, iterCurrent, getAnswer, getQuestion);
};

