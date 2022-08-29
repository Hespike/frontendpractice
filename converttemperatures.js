//Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

function cToF(celsius) {
  var cToFahr = celsius * 9 / 5 + 32;
  console.log(celsius + '\xB0C is ' + cToFahr + ' \xB0F.');
}

function fToC(fahrenheit) {
  var fToCel = (fahrenheit - 32) * 5 / 9;
  console.log(fahrenheit + '\xB0F is ' + fToCel + '\xB0C.');
}

cToF(60);
fToC(45);
