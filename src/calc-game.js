// @flow
/* eslint-disable no-console */
/* eslint arrow-body-style: ["error", "always"]*/
// Игра "Калькулятор"

import { cons, car, cdr } from 'hexlet-pairs';
import game from '../index';

// Функция, вызывающая логику игры
export default () => {
  // вспомогательная функция генерация операции вычисления
  const getOperator = () => {
    switch (Math.floor(Math.random() * 4) + 1) {
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

  // генерация вопроса
  const getQuestion = () => {
    const operator = getOperator();
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    return cons(operator, cons(number1, number2));
  };

  // как выглядит вопрос
  const viewQuestion = (question) => {
    const operator = car(question);
    const number1 = car(cdr(question));
    const number2 = cdr(cdr(question));
    return `${number1} ${operator} ${number2}`;
  };

  // получение ответа
  const getAnswer = (question) => {
    const operator = car(question);
    const number1 = car(cdr(question));
    const number2 = cdr(cdr(question));
    let result;
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        result = number1 / number2;
    }
    return `${result}`;
  };

  // Правила игры
  const ruleGame = 'What is the result of the expression?';

  return game(ruleGame,
    getAnswer,
    getQuestion,
    viewQuestion);
};

