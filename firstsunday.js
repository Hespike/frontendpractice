//tricky rész: hónap 0-val kezdődik, nap pedig 1.-el
/*Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
*/

//Ha mindegyiket szeretném.

for (var year = 2014; year <= 2050; year++) {
  let day = new Date(year, 0, 1);
  if (day.getDay() === 0)
    console.log(`1st January is being a Sunday ${year}`);
}

//Ha csak egyet.

for (var year = 2014; year <= 2050; year++) {
  let day = new Date(year, 0, 1);
  if (day.getDay() === 0) {
    console.log(`1st January is being a Sunday ${year}`);
    break;
  }
}
