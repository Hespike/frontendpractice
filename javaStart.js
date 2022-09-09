/* Write a JavaScript program to check whether a string starts with 'Java' and false otherwise. */

function javaStart(string) {
  string.toLowerCase();
  return string.substring(0, 4) === "java";
}

console.log(javaStart("java"));
console.log(javaStart("ello"));
console.log(javaStart("asd"));
