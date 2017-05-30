// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

export default (ruleGame, getCorrectAnswer, getQuestion, viewQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleGame);
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);

  const maxCurrent = 3;
  const iterFunc = (count) => {
    if (count >= maxCurrent) {
      console.log(`Congratulations, ${nameUser}`);
      return true;
    }
    const question = getQuestion();
    const viewQ = viewQuestion(question);
    console.log(`Question: ${viewQ}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    if (answer === correctAnswer) {
      console.log('Correct!');
      const newCount = count + 1;
      return iterFunc(newCount);
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${nameUser}!`);
    return iterFunc(count);
  };
  return iterFunc(0);
};
