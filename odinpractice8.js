/* Write a function called lastLetter that takes a string and returns the very last letter of that string:*/

let examplestring = "haLLiHo";

function lastLetter(string){
  
let lastletter = string.slice(-1);;
  return lastletter;
}

lastLetter(examplestring);
