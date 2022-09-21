/*
Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 and 3. 
 */

function oneOrThreeChecker3(nums) {
  return (nums.indexOf(1) == -1 && nums.indexOf(3) == -1);
}

console.log(oneOrThreeChecker3([1, 5]));
console.log(oneOrThreeChecker3([2, 3]));
console.log(oneOrThreeChecker3([7, 5]));
