/*
Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
 */

function larger(array) {

  let largerValue = Math.max(array[0], array[array.length - 1]);

  array.forEach((element, index) => {
    array[index] = largerValue;
  });
  
  return array;
}

console.log(larger([3, 4, 5]));
