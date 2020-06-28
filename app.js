function play2() {
  let round = 0;
  let computerScore = 0;
  let playerScore = 0;

  for(let i = 0; i < 5; i++) {
    result = letsPlay();
    console.log(result)
    
    if(result == "Computer wins!") {
      computerScore += 1;
      round += 1;
    } else if (result == "Player wins!") {
      playerScore += 1;
      round += 1;
    } else {
      round += 1;
    }

    console.log("It's round " + round)
    console.log("Computer Score: " + computerScore)
    console.log("Player Score: " + playerScore)
  }

  // Game itself
  function letsPlay() {

    // Computer output
    function computerPlay () {
      let number;
      let computer;
    
      number = Math.floor(Math.random() * 3);
    
      switch (number) {
        case 0:
          computer = "rock";
          break;
        case 1:
          computer = "scissors";
          break;
        case 2:
          computer = "paper";
          break;
      }
    
      return computer;
    }
  
    // Player output
    function playerPlay () {
      let player;
    
      switch (prompt("rock, paper or scissors?").toLocaleLowerCase()) {
        case "rock":
          player = "rock";
          break;
        case "scissors":
          player = "scissors";
          break;
        case "paper":
          player = "paper";
          break;
        default:
          alert('Sorry, your input is invalid.')
      }
    
      return player
    }
  
    let computer = computerPlay();
    let player = playerPlay();
    console.log("Computer chooses " + computer)
    console.log("Player chooses " + player)
  
  
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
    return result;
  }
  
  if(computerScore > playerScore) {
    alert("Computer won!")
  } else if (playerScore > computerScore) {
    alert("Player won!")
  } else {
    alert("It's a draw!")
  }

  return "Game ends :)"

}