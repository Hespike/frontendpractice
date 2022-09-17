/*
Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.
*/

function concatenate(str1, str2) {
  if (str1.length === str2.length) {
    return str1 + str2;
  } else {
    const m = Math.min(str1.length, str2.length);

    return str1.slice(str1.length - m) + str2.slice(str2.length - m);
  }
}

console.log(concatenate("parameter1", "parameter2"));
console.log(concatenate("hel", "abcde"));
