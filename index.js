// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

export default (ruleGame, maxCurrent, getCorrectAnswer, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleGame);
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);

  const iterFunc = (count) => {
    if (count >= maxCurrent) {
      console.log(`Congratulations, ${nameUser}`);
      return true;
    }
    console.log(`Question: ${getQuestion(count)}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(count);
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
