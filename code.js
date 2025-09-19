let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  let result = "";

  if (playerChoice === computerChoice) {
    result = `It's a draw! Both chose ${playerChoice} 🤝`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You Win! 🎉 ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else {
    result = `You Lose! 😢 ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }

  document.getElementById("result").innerText = result;
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("result").innerText = "Make your move!";
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
}
   