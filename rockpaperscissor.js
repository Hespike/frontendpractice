function getComputerChoice() {
  let max = 2;
  computerChoice = Math.floor(Math.random() * max);
  switch(computerChoice){
    case 0: 
    computerChoice = "Kő";
    break;
    case 1: 
    computerChoice = "Papír";
    break;
    case 2: 
    computerChoice = "Olló";
    break;
  }
  return computerChoice;
}
  

function playerSelection() {
  let playerChoice = prompt("Írj be egyet, ha követ akarsz mutatni, kettőt, ha papírt, és hármat, ha ollót.");
  switch(playerChoice){
    case "1": 
    playerChoice = "Kő";
    break;
    case "2": 
    playerChoice = "Papír";
    break;
    case "3": 
    playerChoice = "Olló";
    break;
    default:
      playerChoice = "Nem sikerült megadnod normális inputot nice job";
      break;
  }
  return playerChoice;
}

console.log(getComputerChoice(),playerSelection());
