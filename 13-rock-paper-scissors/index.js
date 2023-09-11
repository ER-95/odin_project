const choices = ["rock", "paper", "scissors"];
let computerChoice, playerChoice, winner, overallWinner;
let playerScore = 0, computerScore = 0;

function getComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

// when I originally wrote this function, it didn't return playerChoice, so it was updating the variable but not passing the latest update of it to the playRound() function, leading it to perpetually be one round behind
function getPlayerChoice() {
  playerChoice = prompt("What would you like to pick, rock, paper, or scissors?").toLowerCase();
  checkValidityPlayerChoice();
  return playerChoice;
}

function checkValidityPlayerChoice() {
  // we could make this a do while instead of being a looping function
  if (!choices.includes(playerChoice)) {
    playerChoice = prompt("Please select a valid option - either rock, paper, or scissors").toLowerCase();
    checkValidityPlayerChoice();
  }
}

function findRoundWinner() {
  if (computerChoice == playerChoice) {
    winner = "draw";
  }

  // this isn't the prettiest way of doing it, but it's easiest to read - we could also write: if compChoice = R && playChoice == S (same for compChoice P and S) then winner == "computer" else winner == "player" but the below is easier to read
  if (computerChoice == "rock") {
    if (playerChoice == "paper") {
      winner = "player";
    }
    if (playerChoice == "scissors") {
      winner = "computer";
    }
  }
  if (computerChoice == "paper") {
    if (playerChoice == "rock") {
      winner = "computer";
    }
    if (playerChoice == "scissors") {
      winner = "player";
    }
  }
  if (computerChoice == "scissors") {
    if (playerChoice == "rock") {
      winner = "player";
    }
    if (playerChoice == "paper") {
      winner = "computer";
    }
  }
}

function updateScore() {
  if (winner == "player") {
    playerScore++;
  }
  if (winner == "computer") {
    computerScore++;
  }
}

function playRound() {
  getComputerChoice();
  getPlayerChoice();
}

function evaluateRound() {
  findRoundWinner();
  updateScore();
  console.log("Computer picked " + computerChoice);
  console.log("Player picked " + playerChoice);
  if (winner == "draw") {
    console.log("No one wins. Both players picked the same option");
  } else {
    console.log("Winner is " + winner);
  }
  console.log("Player score is " + playerScore + ", computer score is " + computerScore);
}

function outputOverallWinner() {
  if (playerScore == 5) {
    overallWinner = "player";
  } else {
    overallWinner = "computer";
  }
  console.log("Game over. Overall winner is " + overallWinner);
}

while (playerScore < 5 && computerScore < 5) {
  playRound();
  evaluateRound();
}

outputOverallWinner();

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

// The below is my second attempt, but it turned into spaghetti code, so I merged both for my third solution
// if (computerChoice == playerChoice) {
//   winner = "draw";
// } else if (computerChoice == "rock") {
//     if (playerChoice == "paper") {
//       winner = "player";
//     } else if (playerChoice = "scissors") {
//       winner = "computer";
//     }
// } else if (computerChoice == "paper") {
//     if (playerChoice == "rock") {
//       winner = "computer";
//     } else if (playerChoice = "scissors") {
//       winner = "player";
//     }
// } else if (computerChoice == "scissors") {
//     if (playerChoice == "rock") {
//       winner = "player";
//     } else if (playerChoice = "paper") {
//       winner = "computer";
//     }
//   }
