const reverseString = function (str) {
  const splitString = str.split("");
  const reversedWord = [];
  const lastCharIndex = splitString.length - 1;

  for (let i = lastCharIndex; i >= 0; i--) {
    reversedWord.push(splitString[i]);
  }

  return reversedWord.join("");
};

// Do not edit below this line
module.exports = reverseString;
