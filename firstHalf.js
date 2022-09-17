/*
Write a JavaScript program to extract the first half of a string of even length.
*/

function firstHalf(str) {

  if (str.length % 2 === 0) {
    return str.substring(0, str.length / 2);
  } else {
    return "Nem megfelelő paraméter.";
  }
}

console.log(firstHalf("example"));
console.log(firstHalf("12345678"));
console.log(firstHalf("ab"));
console.log(firstHalf(1245));
