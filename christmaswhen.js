// Write a JavaScript program to calculate days left until next Christmas

const currentDay = new Date();
const christmas = new Date(currentDay.getFullYear(), 11, 26);

if (currentDay.getMonth() == 11 && currentDay.getDate() > 25) {
christmas.setFullYear(christmas.getFullYear() + 1);
}
// azért kell szorozni ezerrel, mert milisec-et használ a kivonásunk később.
const day = 1000*60*60*24;

console.log(` ${Math.ceil((christmas.getTime()-currentDay.getTime())/(day))} nap van még Karácsonyig.`);
