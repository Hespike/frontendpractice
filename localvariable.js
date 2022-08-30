/* 
The code should not contain a global myVar variable.
Passed:You should add a local myVar variable.
*/

function myLocalScope() {
  // Only change code below this line
let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
