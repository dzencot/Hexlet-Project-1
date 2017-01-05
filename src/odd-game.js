// @flow
/* eslint-disable no-console */

import * as index from '../index';

export default () => {
  index.sayWelcome();
  index.say('Answer "yes" if number odd otherwise answer "no"');
  const nameUser = index.answerNameUser();
  index.sayHello(nameUser);

  const iter = (number, correctIter) => {
    if (correctIter >= 3) {
      index.sayCongratulations(nameUser);
      return 0;
    }
    index.sayQuestion(number);
    const answer = index.getAnswer();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      index.sayCorrect();
      const newCorrectIter = correctIter + 1;
      const newNumber = newCorrectIter === 1 ? 6 : 15;
      return iter(newNumber, newCorrectIter);
    }
    index.sayWrongAnswer(answer, correctAnswer);
    index.sayTryAgain(nameUser);
    return iter(number, correctIter);
  };
  return iter(15, 0);
};
