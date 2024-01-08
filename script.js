const choices = ["rock", "paper", "scissors"];
const winners = [];
function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
document.querySelector("button").textContent = "Play new game";
logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  console.log(computerSelection);
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper,Scissors. Spelling needs to be exact, but capitalization doesn't matter"
    );
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player");
  let computerWins = winners.filter((item) => item == "Computer");
  let ties = winners.filter((item) => item == "Tie");
  console.log("Results");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round", round);
  console.log("Player Choose:", playerChoice);
  console.log("Computer Choice:", computerChoice);
  console.log(winner, "Won the round");
  console.log("-------------------------------")
}

game();
