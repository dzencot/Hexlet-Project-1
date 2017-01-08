// @flow
/* eslint-disable no-console */
/* eslint arrow-body-style: ["error", "always"]*/
// Игра "Калькулятор"

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
    return {
      operator: getOperator(),
      number1: Math.floor(Math.random() * 100) + 1,
      number2: Math.floor(Math.random() * 100) + 1,
    };
  };

  // как выглядит вопрос
  const viewQuestion = (question) => {
    return `${question.number1} ${question.operator} ${question.number2}`;
  };

  // получение ответа
  const getAnswer = (question) => {
    let result;
    switch (question.operator) {
      case '+':
        result = question.number1 + question.number2;
        break;
      case '-':
        result = question.number1 - question.number2;
        break;
      case '*':
        result = question.number1 * question.number2;
        break;
      default:
        result = question.number1 / question.number2;
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

