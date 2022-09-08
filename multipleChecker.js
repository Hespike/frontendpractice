/*
Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7. 
 */

function multipleChecker(number) {
  if (number <= 7) {
    console.log("Need a bigger number");
  } else if (number % 7 == 0 && number % 3 == 0) {
    console.log("Multiple of 3 and 7");
  } else if (number % 7 == 0) {
    console.log("Multiple of 7");
  } else if (number % 3 == 0) {
    console.log("Multiple of 3");
  } else {
    console.log("Not a mutiple of 3 or 7");
  }
}

multipleChecker(15);
multipleChecker(0);
multipleChecker(21);
multipleChecker(7);
multipleChecker(14);
