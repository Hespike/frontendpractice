/*
Write a JavaScript program to check whether a given string contains equal number of p's and t's.
 */

function pequalt(str) {

  {
   let p =  str.replace(/[^p]/g, "").length;
   let q =  str.replace(/[^q]/g, "").length;
   return p == q;
  }
}

console.log(pequalt("ppppqqq"));
console.log(pequalt("exampleq"));
