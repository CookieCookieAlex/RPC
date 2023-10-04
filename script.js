function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("its a tie");
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log(
      "You Win! " + playerSelection + " beats " + computerSelection + "!"
    );
    return "winPl";
  } else {
    console.log(
      "You Lose! " + computerSelection + " beats " + playerSelection + "!"
    );
    return "winCp";
  }
}

// console.log(playRound(playerSelection, computerSelection));

function game() {
  let winsPl = 0;
  let winsCp = 0;

  for (let i = 1; i <= 5; i++) {
    while (winsPl || winsCp < 3 ) {
      const playerSelection = prompt(
        "What's your choice: Rock, Paper or Scissers?"
      );
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      if (result === "winPl") {
            winsPl++;
      } else if (result === "winCp") {
        winCp++;
      } 
      console.log("result: " + winsPl + " - " + winsCp);

      //trying to have the end tiytle who did win the full game
    }
    if (winsCp === 3) {
        return "Computer wins!";
    } else if (winsPl === 3) {
        return "You won!";
    } else {
        return "It's a Tie!";
    }


  }
}

game();
