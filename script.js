//global counter for player

let winsPl = 0;
let winsCp = 0;

// players input buttons

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById("mainScore");
const countPl = document.getElementById("winspl");
const countCp = document.getElementById("winscp");

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
    score.textContent = `Computer Wins! Result is: ${winsCp} : ${winsPl}!`;
  } else if (winsPl === 5) {
    score.textContent = `Player Wins! Result is: ${winsPl} : ${winsCp}!`;
  }

  countPl.textContent = `${winsPl}`;
  countCp.textContent = `${winsCp}`;
}
