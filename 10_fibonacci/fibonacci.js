const fibonacci = function (sequence) {
  if (sequence < 1) {
    return "OOPS";
  }

  let sum = 0;
  let firstNum = 1;
  let secondNum = 1;

  for (let i = 1; i <= sequence; i++) {
    if (i === 1 || i === 2) {
      sum = firstNum;
    } else {
      sum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = sum;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
