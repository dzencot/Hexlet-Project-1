// @flow
/* eslint-disable no-console */
/* eslint no-param-reassign: ["error", { "props": false}]*/
/* eslint arrow-body-style: ["error", "always"]*/
// Игра "Баланс"

import game from '../index';

// Функция, вызывающая логику игры
export default () => {
  // вспомогательная функция генерация операции вычисления
  const getOperator = () => {
    switch (Math.floor(Math.random() * (4 - 1 + 1)) + 1) {
      case 1:
        return '+';
        break;
      case 2:
        return '-';
        break;
      case 3:
        return '*';
        break;
      default:
        return '/';
        break;
    }
  };

  // генерация вопроса
  const getQuestion = () => {
    const operator = getOperator();
    const number1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    const number2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    return { operator, number1, number2 };
  };

  // получение ответа
  const getAnswer = (operator, number1, number2) => {
    switch (operator) {
      case '+':
        return number1 + number2;
        break;
      case '-':
        return number1 - number2;
        break;
      case '*':
        return number1 * number2;
        break;
      default:
        return number1 / number2;
    }
  };
  // Правила игры
  // "Найди сбалансированное число"
  const ruleGame = 'Balance the given number.';

  return game(ruleGame,
    (operator, number1, number2) => getAnswer(operator, number1, number2),
    (operator, number1, number2) => `${number1} ${operator} ${number2});
};
