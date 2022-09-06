/*
Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function fifty(num1, num2) {
  if (num1 == 50 || num2 == 50 || num1 + num2 == 50) {
    return true;

  } else {
    return false;
  }
}

fifty(50);
fifty(30, 25);
fifty(50, 100);
fifty(25, 25);
