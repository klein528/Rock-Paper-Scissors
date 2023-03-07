const rockButton = document.querySelector("#r");
const paperButton = document.querySelector("#p");
const scissorsButton = document.querySelector("#s");
const outcome = document.querySelector(".choices");
const playerScoreSpan = document.querySelector("#userScore");
const computerScoreSpan = document.querySelector("#computerScore");
const responses = document.querySelector(".responses");
const playerWon = document.querySelector(".player-won");
const computerWon = document.querySelector(".computer-won");

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
    return "rock";
    break;
    case 1:
    return "paper";
    break;
    case 2:
    return "scissors";
    break;
  };
}




const playRound = (playerSelection, computerSelection) => {

  if (playerSelection === computerSelection) {
    responses.innerText = `Its a tie! You both picket ${playerSelection}`

  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    responses.innerText = "You won! scissors cuts paper"

  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    responses.innerText = "You won! paper covers rock"

  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    responses.innerText = "You won! rock destroys scissors"
    
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++
    responses.innerText = "You lost! scissors cut paper"

  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++
    responses.innerText = "You lost! paper covers rock"
    
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++
    responses.innerText = "You lost! rock destroys scissors"
}
}

const checkForWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    playerWon.innerText = `You won ${playerScore} to ${computerScore}, absolutely incredible`
    endGame();


  } else if (computerScore === 5) {
    computerWon.innerText = `You lost ${playerScore} to ${computerScore} against a computer! Wanna try again ?`
    endGame();
  } 
}




const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `${playerScore}`
  computerScoreSpan.innerText = `${computerScore}`
}

rockButton.addEventListener("click", rockfunk = () => {
  const computerSelection = getComputerChoice()
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
});

paperButton.addEventListener("click", paperfunk = () => {
  const computerSelection = getComputerChoice()
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
});

scissorsButton.addEventListener("click", scissorsfunk = () => {
  const computerSelection = getComputerChoice()
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
});

function endGame() {
  rockButton.removeEventListener("click", rockfunk, false);
  paperButton.removeEventListener("click", paperfunk, false);
  scissorsButton.removeEventListener("click", scissorsfunk, false);
}

function restartGame() {
  restartScores();
  rockButton.addEventListener("click", rockfunk);
  paperButton.addEventListener("click", paperfunk);
  scissorsButton.addEventListener("click", scissorsfunk);
}

function restartScores() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.innerHTML = playerScore;
  computerScoreSpan.innerHTML = computerScore;
  responses.innerHTML = "";
  playerWon.innerHTML = "";
  computerWon.innerHTML = "";
}