/*
 Write a JavaScript to find the longest string from a given array of strings.
 */

function longestString(array) {

  let longestStr = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestStr.length) {
      longestStr = array[i];
    }
  }
  return longestStr;
}
console.log(longestString(['a', 'aa', 'aaa','aaaaa','aaaa']))
