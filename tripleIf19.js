/*
 Write a JavaScript program to compute the absolute difference between a specified number and 19.
 Returns triple their absolute difference if the specified number is greater than 19.
 */

function tripleIf19(number) {
  if (number > 19) {
    return (number - 19) * 3;
  } else {
  return "Nem nagyobb, mint 19.";
  }
}
tripleIf19(20);
tripleIf19(3);
