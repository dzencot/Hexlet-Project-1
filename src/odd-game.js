// @flow
/* eslint-disable no-console */
// Игра "Проверка на четность"
import { cons, car, cdr } from 'hexlet-pairs';
import game from '../index';

// Правила игры
// "Ответь 'yes', если число четное, иначе ответь 'no'
const ruleGame = 'Answer "yes" if number odd otherwise answer "no".';

// Количество верных ответов
const iterCurrent = 3;

// Инициируем список вопросов и ответов
let questions = null;

// Функция добавления вопроса
const addQuestion = (question) => {
  // сразу вычисляем ответ и запоминаем с привязкой к вопросу
  const newAnswer = question % 2 === 0 ? 'yes' : 'no';
  const newQuestion = cons(question, newAnswer);

  // сохраняем новый список
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
// ответ уже является строкой
const getAnswer = (count) => { return cdr(findQuestion(count)); };


// Функция, вызывающая логику игры
export default () => {
  addQuestion(15);
  addQuestion(6);
  addQuestion(13);
  return game(ruleGame, iterCurrent, getAnswer, getQuestion);
};
