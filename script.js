//global counter for player

let winsPl = 0;
let winsCp = 0;
let winner = "";

//this gives out a choice for the computer

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

//this is the logic of the game

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    score.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    score.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
    winsPl++;
  } else {
    score.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    winsCp++;
  }

  if (winsCp === 5) {
    score.textContent = `Result is: ${winsCp} : ${winsPl}!`;
    score.textContent = `Computer Wins!`;
  } else if (winsPl === 5) {
    score.textContent = `Result is: ${winsPl} : ${winsCp}!`;
    score.textContent = `Player Wins!`;
  }

  countPl.textContent = `${winsPl}`;
  countCp.textContent = `${winsCp}`;

  //adding restart when someone reaches 5 wins.

  if (winsCp === 5) {
    showGameOverPopup("Computer");
  } else if (winsPl === 5) {
    showGameOverPopup("Player");
  }
}

// players input buttons and UI

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById("mainScore");
const countPl = document.getElementById("winspl");
const countCp = document.getElementById("winscp");
const cpSign = document.getElementById("cpSign");
const plSign = document.getElementById("plSign");

// event listeners
rock.addEventListener("click", () => {
  playerSelection = "rock";
  playRound(playerSelection);
  console.log(playerSelection);
});
paper.addEventListener("click", () => {
  playerSelection = "paper";
  playRound(playerSelection);
  console.log(playerSelection);
});
scissors.addEventListener("click", () => {
  playerSelection = "scissors";
  playRound(playerSelection);
  console.log(playerSelection);
});

// Function to show the game-over popup
function showGameOverPopup(winner) {
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("game-over-popup");
  const popupMessage = document.getElementById("popup-message");
  const playAgainButton = document.getElementById("play-again");

  popupMessage.textContent = `${winner} wins!`;
  popup.classList.remove("hidden");
  popup.classList.remove("hidden");

  //disabling game when the popup comes on

  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;

  // Handle the "Play Again" button click event
  playAgainButton.addEventListener("click", () => {
    overlay.style.display = "none";
    popup.style.display = "none";
    overlay.style.display = "block";
    winsPl = 0;
    winsCp = 0;
    countPl.textContent = `${winsPl}`;
    countCp.textContent = `${winsCp}`;
    score.textContent = "Let's play again.";
    overlay.classList.add("hidden");
    popup.classList.add("hidden");

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
  });
}

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restart);
