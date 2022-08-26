/* Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.
If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
*/

const randomNum = Math.ceil(Math.random() * 10);
let chosenNum = prompt('Adj meg egy számot 1 és 10 között');

if (chosenNum == randomNum)
  console.log('Szép munka.');
else
  console.log(`Nem sikerült, a szám ${randomNum} volt`);
