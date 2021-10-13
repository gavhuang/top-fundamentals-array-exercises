const palindromes = function (sentence) {
  const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  //Combine sentence into one array
  const rawLetters = sentence.split("");

  //Filter punctuation
  const cleanLetters = rawLetters.filter(
    (letter) => punctuation.indexOf(letter) === -1
  );
  let cleanString = cleanLetters.join("").split(" ").join("").toLowerCase(); // Join with no space between, split to words (have to do this because of the space), join back together.

  //Palindrome check
  const length = cleanString.length - 1;
  let testString = [];

  for (let i = length; i >= 0; i--) {
    testString.push(cleanString[i]);
  }

  testString = testString.join("");

  return testString === cleanString;
};

/* 
Better answer:
function palindromes(str) {
  const re = /[\W_]/g;
  const lowercaseStr = str.toLowerCase().replace(re, '');
  const reverseStr = lowercaseStr.split('').reverse().join(''); 
  return reverseStr === lowercaseStr;
}
*/

// Do not edit below this line
module.exports = palindromes;
