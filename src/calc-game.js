// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

export default (nameUser) => {
  const viewQuestion = (a, b, operator) => `${a} ${operator} ${b}`;

  const iter = (correctIter, question, correctAnswer) => {
    if (correctIter >= 3) {
      console.log(`Congratulations, '${nameUser}'!`);
      return 0;
    }

    console.log(`Question: '${question}'`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      const newCorrectIter = correctIter + 1;
      let newQuestion;
      let newAnswer;
      if (newCorrectIter === 1) {
        newQuestion = viewQuestion(25, 11, '-');
        newAnswer = '14';
      } else {
        newQuestion = viewQuestion(25, 7, '*');
        newAnswer = '175';
      }
      return iter(newCorrectIter, newQuestion, newAnswer);
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, '${nameUser}'!`);
    return iter(correctIter, question, answer);
  };

  console.log('What is the result of the expression?');
  return iter(0, viewQuestion(4, 10, '+'), '14');
};
