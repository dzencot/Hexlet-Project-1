// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

export const sayWelcome = () => { console.log('Welcome to the Brain Games!'); };

export const answerNameUser = () => {
  const result = readlineSync.question('May I have your name? ');
  return result;
};

export const sayHello = (nameUser) => { console.log(`Hello, '${nameUser}'!`); };

export const sayCongratulations = (nameUser) => { console.log(`Congratulations, '${nameUser}!'`); };

export const say = (msg) => { console.log(msg); };

export const getAnswer = () => {
  const result = readlineSync.question('Your answer: ');
  return result;
};

export const sayQuestion = (question) => { console.log(`Question: '${question}'`); };

export const sayCorrect = () => { console.log('Correct!'); };

export const sayWrongAnswer = (answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};

export const sayTryAgain = (nameUser) => { console.log(`Let's try again, '${nameUser}'!`); };
