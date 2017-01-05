// @flow
/* eslint-disable no-console */

import * as index from '../index';

export default () => {
  index.sayWelcome();
  index.say('What is the result of the expression?');
  const nameUser = index.answerNameUser();
  index.sayHello(nameUser);

  const viewQuestion = (a, b, operator) => `${a} ${operator} ${b}`;

  const iter = (correctIter, question, correctAnswer) => {
    if (correctIter >= 3) {
      index.sayCongratulations(nameUser);
      return 0;
    }

    index.sayQuestion(question);
    const answer = index.getAnswer();

    if (answer === correctAnswer) {
      index.sayCorrect();
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

    index.sayWrongAnswer(answer, correctAnswer);
    index.sayTryAgain(nameUser);
    return iter(correctIter, question, correctAnswer);
  };

  return iter(0, viewQuestion(4, 10, '+'), '14');
};
