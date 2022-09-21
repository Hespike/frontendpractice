/*
Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3. 
 */

function oneOrThreeChecker2(nums) {
  return (nums.indexOf(1) == -1 || nums.indexOf(3) == -1);
}

console.log(oneOrThreeChecker2([1, 5]));
console.log(oneOrThreeChecker2([2, 3]));
console.log(oneOrThreeChecker2([7, 5]));
