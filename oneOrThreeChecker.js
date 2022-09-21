/*
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
 */

function oneOrThreeChecker(nums) {

  return (nums.indexOf(1) != -1 || nums.indexOf(3) != -1);
}

console.log(oneOrThreeChecker([1, 5]));
console.log(oneOrThreeChecker([2, 3]));
console.log(oneOrThreeChecker([7, 5]));
