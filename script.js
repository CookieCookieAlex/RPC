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
    openEndPop("Computer");
  } else if (winsPl === 5) {
    openEndPop("Player");
  }
}

// UI

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById("mainScore");
const countPl = document.getElementById("winspl");
const countCp = document.getElementById("winscp");
const cpSign = document.getElementById("cpSign");
const plSign = document.getElementById("plSign");
const endPop = document.getElementById("end-popup");
const restart = document.getElementById("restart");
const overlay = document.getElementById("overlay");

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

restart.addEventListener("click", restartGame);

//open the restart popup
function openEndPop() {
  endPop.classList.add("active");
  overlay.classList.add("active");
}

//function for end of the game

function restartGame() {
  winsCp = 0;
  winsPl = 0;
  winner = "";
  countPl.textContent = `${winsPl}`;
  countCp.textContent = `${winsCp}`;

  score.textContent = "Welcome player. Care to join me on a game of RPC?";
  endPop.classList.remove("active");
  overlay.classList.remove("active");
}

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restart);
