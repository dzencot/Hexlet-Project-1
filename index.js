// @flow
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
  return 0;
};

export const answerNameUser = () => readlineSync.question('May I have your name? ');


export const sayHello = (nameUser) => {
  console.log(`Hello, '${nameUser}'!`);
  return 0;
};
