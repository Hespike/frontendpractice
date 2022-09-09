/*
Write a JavaScript program to check whether the last digit of the three given positive integers is same.
*/

function lastDigit(num1, num2, num3) {
  if ((num1 > 0) && num2 > 0 && num3 > 0) {
    return (num1 % 10 == num2 % 10 && num2 % 10 == num3 % 10 && num1 % 10 == num3 % 10);
  } else
    return "Nem pozitívak a paraméterek, vagy nem lett megadva elegendő paraméter..";
}

console.log(lastDigit(100, 50, 22));
console.log(lastDigit(10, 20, 50));
console.log(lastDigit(1, 11, 111));
