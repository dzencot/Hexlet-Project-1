// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

export default (ruleGame, iterCurrent, getCorrectAnswer, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleGame());
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);

  const iterFunc = (iter) => {
    if (iter >= iterCurrent()) {
      console.log(`Congratulations, ${nameUser}`);
      return true;
    }
    console.log(`Question: ${getQuestion(iter)}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(iter);
    if (answer === correctAnswer) {
      console.log('Correct!');
      const newIter = iter + 1;
      return iterFunc(newIter);
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${nameUser}!`);
    return iterFunc(iter);
  };
  return iterFunc(0);
};
