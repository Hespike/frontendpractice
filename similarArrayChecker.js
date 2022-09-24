/*
Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
*/

function similarArrayChecker(firstArray, secondArray) {

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = i; j < firstArray.length; j++) {
      let result = true;
      let temp = firstArray[i];
      
      firstArray[i] = firstArray[j];
      firstArray[j] = temp;

      for (let k = 0; k < firstArray.length; k++) {
        if (firstArray[k] !== secondArray[k]) {
          result = false;
          break;
        }
      }
      if (result) {
        return true;
      }
      firstArray[j] = firstArray[i];
      firstArray[i] = temp;
    }
  }
  return false;
}

console.log(similarArrayChecker([10, 20, 30], [10, 20, 30]))
console.log(similarArrayChecker([10, 20, 30], [30, 10, 20]))
console.log(similarArrayChecker([10, 20, 30, 40], [10, 30, 20, 40]))
