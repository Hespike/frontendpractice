/*
Write a JavaScript program to check the total marks of a student in various examinations.
The student will get A+ grade if the total marks are in the range 89..100 inclusive.
Return true if the student get A+ grade or false otherwise. 
*/

function grader(marks) {
  if (marks >= 90 && marks <= 100) {
    return true;
  } else {
    return false;
  }
}

console.log(grader(150));
console.log(grader(96));
