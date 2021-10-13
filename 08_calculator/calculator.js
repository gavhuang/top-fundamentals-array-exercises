const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((firstNum, secondNum) => firstNum + secondNum, 0);
};

const multiply = function (array) {
  return array.reduce((firstNum, secondNum) => firstNum * secondNum, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let nextNum = a - 1;

  if (a === 1 || a === 0) {
    return 1;
  }

  return a * factorial(nextNum);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
