/*
Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.
*/

function nString(str, n) {
  if (str.length > n) {
    {
      beforeFirstn = str.substring(0, n);
      afterLastn = str.substring(str.length - n);
      return beforeFirstn + afterLastn;
    }
  } else {
    return "Nem elég hosszú a string.";
  }
}

console.log(nString("Example", 2));
console.log(nString("Hi", 4));
