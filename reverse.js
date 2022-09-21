/*
 Write a JavaScript program to reverse the elements of a given array of integers length 3.
 */

function reverse(array) {

  return ([array[2], array[1], array[0]]);
}

/*
function reverse(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
}
*/

console.log(reverse([3, 4, 5]));
