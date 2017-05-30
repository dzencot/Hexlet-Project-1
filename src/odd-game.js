// @flow
/* eslint-disable no-console */
/* eslint arrow-body-style: ["error", "always"]*/
import game from '.';

export default () => {
  const getAnswer = (question) => {
    return question % 2 === 0 ? 'yes' : 'no';
  };
  const getQuestion = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  const ruleGame = 'Answer "yes" if number odd otherwise answer "no".';
  return game(ruleGame, getAnswer, getQuestion,
      (num) => {
        return num;
      });
};

