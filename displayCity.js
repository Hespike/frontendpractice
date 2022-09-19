/*
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function displayCity(string) {

  if (string.slice(0, 3) === "Los" || string.slice(0, 3) === "New") {
    return string;
  } else {
    return "Nem Los-al vagy New-al kezdődik.";
  }
}

console.log(displayCity("Los Angeles"));
console.log(displayCity("Tataháza"));
console.log(displayCity("New York"));
