//function getOddNumbers(arr) {
//  const oddNumbers = arr.filter(num => num % 2 !== 0);
//  return oddNumbers.length > 1 ? oddNumbers : oddNumbers[0];
//}
//
//console.log(getOddNumbers([2, 4, 6, 8, 11, 20, 15, 22])); // [11, 15]
//console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
//console.log(getOddNumbers([70, 42, 55, 81, 21, 91, 34])); // [55, 81, 21, 91]
//console.log(getOddNumbers([2, 4, 6, 8, 10, 11, 12])); // [11


//function countConsonantsAndVowels(str) {
//  let numConsonants = 0;
//  let numVowels = 0;
//
//  for (let i = 0; i < str.length; i++) {
//    const char = str[i].toLowerCase();
//  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//    numVowels++;
//    } else if (char >= 'a' && char <= 'z') {
//    numConsonants++;
//  }
//}
//return `${str} has ${numConsonants} consonants and ${numVowels} vowels`;
//}
//console.log(countConsonantsAndVowels('hello'))
//console.log(countConsonantsAndVowels('ukelele'))
//console.log(countConsonantsAndVowels('awesome'))
//console.log(countConsonantsAndVowels('onomonopia'))
//console.log(countConsonantsAndVowels('textbook')


//function reverseArray(arr) {
//  const reversed = [];
//  for (let i = arr.length - 1; i >= 0; i--) {
//    reversed.push(arr[i]);
//  }
//  return reversed;
//}
//console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
//console.log(reverseArray([1, 3, 5, 7, 9, 11])); // [11, 9, 7, 5, 3, 1]
//console.log(reverseArray([20, 50, 30, 60, 200])); // [200, 60, 30, 50, 20]
//console.log(reverseArray([1, -1, 2, -3, 5, -8, 13])); // [13, -8, 5, -3, 2, -1, 1]


for (let i = 3; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}