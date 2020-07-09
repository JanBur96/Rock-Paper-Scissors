// Variables
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const btns = document.querySelector('.btns')
let choices = document.querySelector('.choices')
let computerChoice = document.querySelector('.computerChoice')
let playerChoice = document.querySelector('.playerChoice')
let domRound = document.querySelector('.round')
let scoreComputer = document.querySelector('.scoreComputer')
let scorePlayer = document.querySelector('.scorePlayer')
let newGame = document.querySelector('.newGame')


// Create elements
let currentRound = document.createElement('h3')
let scoreComputerDisplay = document.createElement('h3')
let scorePlayerDisplay = document.createElement('h3')
let playerChose;
let computerResult = document.createElement('h3')
let playerResult = document.createElement('h3')

currentRound.textContent = "0"
domRound.appendChild(currentRound)

scoreComputerDisplay.textContent = "0"
scoreComputer.appendChild(scoreComputerDisplay)
scorePlayerDisplay.textContent = "0"
scorePlayer.appendChild(scorePlayerDisplay)

let icon = document.createElement('i')
let icon2 = document.createElement('i')

let round = 0;
let computerScore = 0;
let playerScore = 0;


// Game 
function letsPlay() {

  // Computer output
  function computerPlay () {
    let number;
    let computer;
  
    number = Math.floor(Math.random() * 3);
  
    switch (number) {
      case 0:
        computer = "rock";
        icon.className = `far fa-hand-${computer}`
        computerChoice.appendChild(icon)
        break;
      case 1:
        computer = "scissors";
        icon.className = `far fa-hand-${computer}`
        computerChoice.appendChild(icon)
        break;
      case 2:
        computer = "paper";
        icon.className = `far fa-hand-${computer}`
        computerChoice.appendChild(icon)
        break;
    }
    
    return computer;
  }

  // Player output
  function playerPlay () {
    let player;
  
    switch (playerChose) {
      case "rock":
        player = "rock";
        icon2.className = `far fa-hand-${player}`
        playerChoice.appendChild(icon2)
        break;
      case "scissors":
        player = "scissors";
        icon2.className = `far fa-hand-${player}`
        playerChoice.appendChild(icon2)
        break;
      case "paper":
        player = "paper";
        icon2.className = `far fa-hand-${player}`
        playerChoice.appendChild(icon2)
        break;
      default:
        alert('Sorry, your input is invalid.')
    }
  
    return player
  }

  let computer = computerPlay();
  let player = playerPlay();

  // Who won?
  function play(computer, player) {

    // Draw
    if (computer == player) {
      return "Draw";
    }
  
    // Computer wins
      else if (computer == "paper" && player == "rock") {
        return "Computer wins!"
      }
  
      else if (computer == "scissors" && player == "paper") {
        return "Computer wins!"
      }
  
      else if (computer == "rock" && player == "scissors") {
        return "Computer wins!"
      }
  
    // Player wins
      else if (player == "paper" && computer == "rock") {
        return "Player wins!"
      }
  
      else if (player == "scissors" && computer == "paper") {
        return "Player wins!"
      }
  
      else if (player == "rock" && computer == "scissors") {
        return "Player wins!"
      }
  }

  let result = play(computer, player)
  
  if(result == "Computer wins!") {
    computerScore += 1;
    round += 1;
    scoreComputerDisplay.textContent = computerScore;
    currentRound.textContent = round;
  } else if (result == "Player wins!") {
    playerScore += 1;
    round += 1;
    scorePlayerDisplay.textContent = playerScore;
    currentRound.textContent = round;
  } else {
    round += 1;
    currentRound.textContent = round;
  }
  
  if (round === 5 && computerScore > playerScore) {
    alert('The Computer has won. Try again!')
    location.reload()
  } else if (round === 5 && playerScore > computerScore) {
    alert('Congratulations, you have won!')
    location.reload()
  } else if (round === 5 && playerScore === computerScore) {
    alert('It\'s a draw. Try again!')
    location.reload()
  }
}

// Listener
rock.addEventListener('click', () => {
  playerChose = "rock"
  letsPlay()
})

paper.addEventListener('click', () => {
  playerChose = "paper"
  letsPlay()
})

scissors.addEventListener('click', () => {
  playerChose = "scissors"
  letsPlay()
})

newGame.addEventListener('click', () => {
  location.reload()
})
