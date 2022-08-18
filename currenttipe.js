//Egy apró script, amely kiírja hogy milyen nap van ma, és mennyi az idő.

var currentDate = new Date()
var currentDay = currentDate.getDay();
var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

switch(currentDay){
  case 1: 
    currentDay = "Monday";
    break;
  case 2: 
    currentDay = "Tuesday";
    break;
  case 3: 
    currentDay = "Wednesday";
    break;
  case 4: 
    currentDay = "Thursday";
    break;  
  case 5: 
    currentDay = "Friday";
    break;
  case 6: 
    currentDay = "Saturday";
    break;
  case 7: 
    currentDay = "Sunday";
    break;
}

console.log("Today is " + currentDay + ", and the time is " + currentTime + ".");
