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
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
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

  
    while ((winsPl < 3) && (winsCp < 3) ) {
      const playerSelection = prompt(
        "What's your choice: Rock, Paper or Scissers?"
      );
      if (playerSelection.toLowerCase() !== ("rock" || "paper" || "scissors")) {
        console.log("wrong input!");
      } else {
        const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      if (result === "winPl") {
            winsPl++;
      } else if (result === "winCp") {
        winsCp++;
      } 
      console.log("result: " + winsPl + " - " + winsCp);
      }

      //trying to have the end tiytle who did win the full game
    }

    if (winsCp === 3) {
        console.log("Computer Wins!"+ "Result is: " + winsCp + ":" + winsPl);
    } else if (winsPl === 3) {
      console.log("Player Wins!" + "Result is: " + winsPl + ":" + winsCp);
    } 


  
}

game();
