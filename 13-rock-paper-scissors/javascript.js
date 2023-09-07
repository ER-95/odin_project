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
  if (computerChoice == playerChoice) {
    winner = "draw";
  } else if (computerChoice == "rock") {
      if (playerChoice == "paper") {
        winner = "player";
      } else if (playerChoice = "scissors") {
        winner = "computer";
      }
  } else if (computerChoice == "paper") {
      if (playerChoice == "rock") {
        winner = "computer";
      } else if (playerChoice = "scissors") {
        winner = "player";
      }
  } else if (computerChoice == "scissors") {
      if (playerChoice == "rock") {
        winner = "player";
      } else if (playerChoice = "paper") {
        winner = "computer";
      }
    }
  console.log("Computer picked " + computerChoice);
  console.log("Player picked " + playerChoice);
  if (winner == "draw") {
    console.log("No one wins. Both players picked the same option");
  } else {
    console.log("Winner is " + winner);
  }
}

playRound(playerChoice, computerChoice);

// The below is my original code for this, but it has a lot of unnecessary duplications (e.g. we can declare a draw by writing out an if to compare playerChoice to computerChoice once rather than three times)
  // if (computerChoice == "rock") {
  //   if (playerChoice == "paper") {
  //     winner = "player";
  //   } else if (playerChoice == "scissors") {
  //     winner = "computer";
  //   } else if (playerChoice == "rock") {
  //     winner = "draw";
  //   }
  // }
  // if (computerChoice == "scissors") {
  //   if (playerChoice == "paper") {
  //     winner = "computer";
  //   } else if (playerChoice == "scissors") {
  //     winner = "draw";
  //   } else if (playerChoice == "rock") {
  //     winner = "player";
  //   }
  // }
  // if (computerChoice == "paper") {
  //   if (playerChoice == "paper") {
  //     winner = "draw";
  //   } else if (playerChoice == "scissors") {
  //     winner = "player";
  //   } else if (playerChoice == "rock") {
  //     winner = "computer";
  //   }
  // }