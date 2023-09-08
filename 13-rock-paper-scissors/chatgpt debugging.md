Me: The below code is perpetually one round behind - i.e. if the player picks "rock" in the first round, their choice is set to "undefined", but if they pick "paper" in the second round, it takes their first round choice of "rock". Why is this?
```
const choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let winner;
let playerScore = 0;
let computerScore = 0;
let overallWinner;

function getComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function getPlayerChoice() {
  playerChoice = prompt("What would you like to pick, rock, paper, or scissors?").toLowerCase();
}

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

function playRound(playerChoice, computerChoice) {
  getComputerChoice();
  getPlayerChoice();
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
  playRound(playerChoice, computerChoice);
}

outputOverallWinner();
```
ChatGPT
The issue you're encountering is because you're passing the global playerChoice and computerChoice variables as arguments to the playRound function, but inside that function, you are immediately overwriting these values by calling getPlayerChoice() and getComputerChoice(). This means that the choices made by the player and computer for the current round are overwritten by the choices made in the next round.

To fix this issue, you should remove the parameters playerChoice and computerChoice from the playRound function, and instead, let the function use the global variables playerChoice and computerChoice. Here's the modified code:

javascript
Copy code
```
const choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let winner;
let playerScore = 0;
let computerScore = 0;
let overallWinner;

function getComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function getPlayerChoice() {
  playerChoice = prompt("What would you like to pick, rock, paper, or scissors?").toLowerCase();
}

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

function playRound() { // Remove parameters here
  getComputerChoice();
  getPlayerChoice();
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
  playRound(); // Remove arguments here
}

outputOverallWinner();
```
With this change, the playRound function will correctly use the global playerChoice and computerChoice variables, and your game should work as expected.

Me: Is there any way of doing this while keeping getPlayerChoice and getComputerChoice inside the playRound function?
ChatGPT
Yes, you can keep getPlayerChoice and getComputerChoice inside the playRound function while still resolving the issue of being one round behind. To do this, you can return the choices from these functions and then use those values to determine the winner and update the score within the playRound function. Here's how you can modify your code to achieve this:

javascript
Copy code
```
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let overallWinner;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  return prompt("What would you like to pick, rock, paper, or scissors?").toLowerCase();
}

function findRoundWinner(playerChoice, computerChoice) {
  if (computerChoice == playerChoice) {
    return "draw";
  }
  if (computerChoice == "rock") {
    if (playerChoice == "paper") {
      return "player";
    }
    if (playerChoice == "scissors") {
      return "computer";
    }
  }
  if (computerChoice == "paper") {
    if (playerChoice == "rock") {
      return "computer";
    }
    if (playerChoice == "scissors") {
      return "player";
    }
  }
  if (computerChoice == "scissors") {
    if (playerChoice == "rock") {
      return "player";
    }
    if (playerChoice == "paper") {
      return "computer";
    }
  }
}

function updateScore(winner) {
  if (winner == "player") {
    playerScore++;
  }
  if (winner == "computer") {
    computerScore++;
  }
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = findRoundWinner(playerChoice, computerChoice);

  console.log("Computer picked " + computerChoice);
  console.log("Player picked " + playerChoice);
  if (winner == "draw") {
    console.log("No one wins. Both players picked the same option");
  } else {
    console.log("Winner is " + winner);
  }
  updateScore(winner);

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
}

outputOverallWinner();
```
With these modifications, the getPlayerChoice and getComputerChoice functions are still inside the playRound function, and the code should work correctly without being one round behind.

