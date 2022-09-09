/* Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position
in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.  */

function stringScript(string) {
  if (string.length < 6) {
    return string;
  } else if (string.substring(4,10) === "Script"){
  return string.substring(0,4) + string.substring(10, string.length);
  }
}

console.log(stringScript("Hello"));
console.log(stringScript("JavaScript"));
console.log(stringScript("JavaScriptisCool"));
