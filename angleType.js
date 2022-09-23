/*
Write a JavaScript program to find the types of a given angle.
 */

function angleType(angle) {
  if (angle < 90) {
    return "Acute angle.";
  } else if (angle === 90) {
    return "Right angle.";
  } else if (angle < 180) {
    return "Obtuse angle.";
  } else if (angle === 180) {
    return "Straight angle.";
  }
}

console.log(angleType(47))
console.log(angleType(90))
console.log(angleType(145))
console.log(angleType(180))
