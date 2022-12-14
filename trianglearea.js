// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

const a = 5;
const b = 6;
const c = 7;

const semiperimeter = (a + b + c) / 2;

const area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) *  (semiperimeter - c));

console.log(`A háromszög területe: ${area}`);
//alternatív megoldás
const area2 = Math.pow(semiperimeter * (semiperimeter - a) * (semiperimeter - b) *  (semiperimeter - c), 1/2);

console.log(`A háromszög2 területe: ${area2}`);
