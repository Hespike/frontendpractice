/*
Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.
*/

function middleThree(str) {
  if (str.length >= 3 && str.length % 2 === 1) {
    return str.slice(str.length / 2 - 1,str.length / 2 + 2);
  } else {
    return "Nem jó paraméter.";
  }
}

console.log(middleThree("goodparameter"));
console.log(middleThree("hello"));
console.log(middleThree("hell"));
