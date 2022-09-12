/*
Write a JavaScript program to capitalize the first letter of each word of a given string.
*/

function capitalize(string) {
  string = string.split(" ");

  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].substr(1);
    }
    
    return string.join(" ");
}

console.log(capitalize("this is an example"));
