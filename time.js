/*
Write a JavaScript program to convert a given number to hours and minutes.
*/

function time(num) {
  let minutes = num % 60
  let hours = (num - minutes) / 60;
  
  return `The time is ${hours}:${minutes}.`
}

console.log(time(126));
