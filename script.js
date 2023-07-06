'use strict';
// 11:
const numbers = [12, 3, 6, 10, 7, 4];
const sortedNumbers = numbers.sort((a, b) => a - b);
const secondSmallest = sortedNumbers[1];

document.getElementById(
  '1stResult'
).textContent = `1. Second Smallest Number in the given values: ${secondSmallest}`;

// 12:
const words = ['e', 'c', 'c', 'f', 'b'];
const sortedWords = words.sort();

document.getElementById(
  '2ndResult'
).textContent = `2. Sort Words: ${sortedWords.join()}`;

// 13:
const array1 = ['Apple', 'Mango', 'Banana', 'Grapes'];
const array2 = ['Mango', 'Papaya', 'Apple', 'Pineapple'];
const commonElements = array1.filter((value) => array2.includes(value));

document.getElementById(
  '3rdResult'
).textContent = `3. Common word: ${commonElements.join()}`;

// 14:
const sentence = 'sun rises in the east';
const capitalWord = sentence
  .split(' ')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

document.getElementById(
  '4thResult'
).textContent = `4. Capital Word: ${capitalWord}`;

//15:
const strings = ['Coimbatore', 'Chennai', 'Salem', 'Trichy', 'Ooty'];
const lengthyString = strings.reduce((acc, curr) =>
  curr.length > acc.length ? curr : acc
);

document.getElementById(
  '5thResult'
).textContent = `5. TooLength-String: ${lengthyString}`;

//16:
const names = ['backend', 'frontend', 'web-development'];
const reverseSorted = names.sort((a, b) => b.localeCompare(a));

document.getElementById(
  '6thResult'
).textContent = `6. Sorted-Reverse: ${reverseSorted.join(', ')}`;

//17:
const str = ' J A V A S C R I P T';
const stringNonspace = str.replace(/\s/g, '');

document.getElementById(
  '7thResult'
).textContent = `7. String -Non space: ${stringNonspace}`;

//18:
const number = [0, 2, 4];
const sumOfSquares = number.reduce((acc, curr) => acc + curr ** 2, 0);

document.getElementById(
  '8thResult'
).textContent = `8. Squared Numbers: ${sumOfSquares}`;

//19:
const stringsList = [
  'Hello',
  ' world',
  ' !',
  ' This',
  ' is',
  ' a',
  ' concatenation',
  ' example',
];
const concatenatedString = stringsList.join('');

document.getElementById(
  '9thResult'
).textContent = `9. Concatenated String: ${concatenatedString}`;

//20:
const sentences = 'it is a beautiful day and it will rain today .';
const wordsto = sentences.toLowerCase().match(/[a-z]+/g);
const wordCountMap = {};

for (const word of wordsto) {
  wordCountMap[word] = (wordCountMap[word] || 0) + 1;
}
const mostCommonWord = Object.keys(wordCountMap).reduce((a, b) =>
  wordCountMap[a] > wordCountMap[b] ? a : b
);

document.getElementById(
  '10thResult'
).textContent = `10. Common Word: ${mostCommonWord}`;
