// @flow
/* eslint-disable no-console */
// Игра "Калькулятор"

import { cons, car, cdr } from 'hexlet-pairs';
import game from '../index';

// Правила игры
// "Какой результат выражения?"
const ruleGame = 'What is the result of the expression?';

// Количество верных ответов
const iterCurrent = 3;

// инициируем список вопросов и ответов
let questions = null;

// опишем добавление вопроса и ответа
const addQuestion = (operator, a, b) => {
  // вычисляем ответ
  let result;
  switch (operator) {
    case '/':
      result = a / b;
      break;
    case '+':
      result = a + b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      result = a - b;
      break;
  }
  // вопрос-ответ хранится по типу
  // (('знак вычисления', ('число1', 'число2')), 'ответ')
  const newQuestion = cons(cons(operator, cons(a, b)), result);

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
  // числа и оператор хранятся довольно запутано. подглядываем сверху=)
  const operator = car(car(findQuestion(count)));
  const number1 = car(cdr(car(findQuestion(count))));
  const number2 = cdr(cdr(car(findQuestion(count))));
  return `${number1} ${operator} ${number2}`;
};

// Функция, извлекающая ответ
// кстати, ответ должен быть строкой, чтобы сравнение ответов было однотипным
const getAnswer = (count) => { return `${cdr(findQuestion(count))}`; };


// Функция, вызывающая логику игры
export default () => {
  // добавляем вопросы
  addQuestion('*', 25, 7);
  addQuestion('-', 25, 11);
  addQuestion('+', 4, 10);
  return game(ruleGame, iterCurrent, getAnswer, getQuestion);
};
