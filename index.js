// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

// Основная логика игры
export default (ruleGame, getCorrectAnswer, getQuestion) => {
  // покажем приветствие
  console.log('Welcome to the Brain Games!');
  // покажем правила игры
  console.log(ruleGame);
  // спросим имя пользователя
  const nameUser = readlineSync.question('May I have your name? ');
  // поприветствуем пользователя
  console.log(`Hello, ${nameUser}`);

  const maxCurrent = 3;
  // рекурсия игры
  const iterFunc = (count) => {
    // играем пока количество правильных ответов не достигло минимума
    if (count >= maxCurrent) {
      // игра закончена, поздравляем
      console.log(`Congratulations, ${nameUser}`);
      return true;
    }
    // показываем вопрос и спрашиваем ответ
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    // правильный ответ?
    if (answer === correctAnswer) {
      // сообщаем, что ответ правильный, добавляем счетчик правильных ответов
      // играем дальше
      console.log('Correct!');
      const newCount = count + 1;
      return iterFunc(newCount);
    }
    // сообщаем, что ответ неверный, продолжаем играть
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${nameUser}!`);
    return iterFunc(count);
  };
  // начало игры, счетчик правильных ответов равен нулю
  return iterFunc(0);
};
