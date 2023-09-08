const choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let winner;
let playerScore = 0;
let computerScore = 0;
let overallWinner;

// for the two below functions, instead of setting the variable computerChoice/playerChoice, we could instead return them - this would resolve the issue we were having of the game consistently being played a round behind (because if we set the values they were immediately being overwritten) - see "chatgpt debugging" file in this directory

function getComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function getPlayerChoice() {
  playerChoice = prompt("What would you like to pick, rock, paper, or scissors?").toLowerCase();
}

// function checkPlayerChoice(playerChoice){
//   if (!(choices.includes(playerChoice))) {
//     playerChoice = prompt("Please select a valid option from rock, paper, and scissors").toLowerCase();
//   }
// }

function findRoundWinner() {
  if (computerChoice == playerChoice) {
    winner = "draw";
  }
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

function getInputs(){
  getComputerChoice();
  getPlayerChoice();
}

function evaluateRound(playerChoice, computerChoice) {
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
  getInputs();
  evaluateRound(playerChoice, computerChoice);
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
