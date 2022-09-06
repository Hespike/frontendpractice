/*
Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
*/

function pyAdder(string) {
  if (string[0] == "P" && string[1] == "y") {
    return string;
  } else {
    return ("Py" + string);
  }
}

console.log(pyAdder("Python"));
console.log(pyAdder("Randomword"));
console.log(pyAdder("XyzPy"));
console.log(pyAdder(""));
