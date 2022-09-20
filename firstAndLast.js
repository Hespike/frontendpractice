/*
 Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.
*/

function firstAndLast(nums) {

  return nums[0] == nums[nums.length - 1];
}

console.log(firstAndLast([10, 20, 30]));
console.log(firstAndLast([10, 20, 30, 10]));
console.log(firstAndLast([20, 20, 20]));
