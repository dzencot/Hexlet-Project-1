#!/usr/bin/env node
// @flow

import readlineSync from 'readline-sync';

const oddGame = (nameUser) => {
  const iter = (number, correctIter) => {
    if (correctIter >= 3) {
      console.log(`Congratulations, '${nameUser}'!`);
      return 0;
    }
    console.log(`Question: '${number}'`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      const newCorrectIter = correctIter + 1;
      const newNumber = newCorrectIter === 1 ? 6 : 15;
      return iter(newNumber, newCorrectIter);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, '${nameUser}'!`);
    return iter(number, correctIter);
  };
  return iter(15, 0);
};

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number odd otherwise answer "no"\n');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, '${name}'\n`);
oddGame(name);
