// @flow
/* eslint-disable no-console */
/* eslint arrow-body-style: ["error", "always"]*/
// Игра "Проверка на четность"
import { cons, car, cdr } from 'hexlet-pairs';
import game from '../index';



// Функция, вызывающая логику игры
export default () => {
  // описываем получение ответа
  const getAnswer = (question) =>
    question % 2 === 0 ? 'yes' : 'no';
  // описываем получение вопроса
  const getQuestion = () =>
    Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  // Правила игры
  // "Ответь 'yes', если число четное, иначе ответь 'no'
  const ruleGame = 'Answer "yes" if number odd otherwise answer "no".';

  return game(ruleGame, getAnswer, getQuestion);
};

