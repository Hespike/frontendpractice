/* Write a JavaScript program to create a new string from a given string changing the
position of first and last characters. The string length must be greater than or equal to 1.*/

function firstLast(str) {
  if (str.length > 1) {
    return (str.charAt(str.length - 1)) + str.substring(1, str.length - 1) + str.charAt(0);
  } else {
    return "Hosszabb stringre van szükség.";
  }
}

console.log(firstLast("Example"));
console.log(firstLast("Hello"));
console.log(firstLast("H"));
