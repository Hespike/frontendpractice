/* Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.*/

function gregorianYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return 1;
  } else {
    return 0;
  }
}
console.log(gregorianYear(2016));
console.log(gregorianYear(2000));
console.log(gregorianYear(1700));
console.log(gregorianYear(1800));
console.log(gregorianYear(100));
