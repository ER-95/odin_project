const choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let winner;

function getComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

getComputerChoice();

function getPlayerChoice() {
  playerChoice = prompt("What would you like to pick, rock, paper, or scissors?").toLowerCase();
}

getPlayerChoice();

function playRound(playerChoice, computerChoice) {
  if (computerChoice == "rock") {
    if (playerChoice == "paper") {
      winner = "player";
    } else if (playerChoice == "scissors") {
      winner = "computer";
    } else if (playerChoice == "rock") {
      winner = "no-one";
    }
  }
  if (computerChoice == "scissors") {
    if (playerChoice == "paper") {
      winner = "computer";
    } else if (playerChoice == "scissors") {
      winner = "no-one";
    } else if (playerChoice == "rock") {
      winner = "player";
    }
  }
  if (computerChoice == "paper") {
    if (playerChoice == "paper") {
      winner = "no-one";
    } else if (playerChoice == "scissors") {
      winner = "player";
    } else if (playerChoice == "rock") {
      winner = "computer";
    }
  }
  console.log("Computer picked " + computerChoice);
  console.log("Player picked " + playerChoice);
  console.log("Winner is " + winner)
}

playRound(playerChoice, computerChoice);