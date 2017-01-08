// @flow
/* eslint arrow-body-style: ["error", "always"]*/

// вычисляет результат
export default (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    default:
      return 'unknown operator';
  }
};

