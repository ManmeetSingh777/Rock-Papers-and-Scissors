let userScore = 0;
let computerScore = 0;
let rounds = 0;


const handImages = {
  rock: "./rock-paper-scissors-boilerplate/assets/rock-hand.png",
  paper: "./rock-paper-scissors-boilerplate/assets/paper-hand.png",
  scissors: "./rock-paper-scissors-boilerplate/assets/scissors-hand.png"
};

function selectHand(symbol) {
    console.log("Selected hand:", symbol);

   
    const userHand = document.getElementById("userHand");
    userHand.setAttribute("src", handImages[symbol]);

   
    const computerHand = getRandomHand();
    const computerHandImg = document.getElementById("computerHand");
    computerHandImg.setAttribute("src", handImages[computerHand]);

   
    const result = getResult(symbol, computerHand);
    updateScore(result);

    
    displayResultMessage();
}

function getRandomHand() {
  const hands = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

function getResult(userHand, computerHand) {
  if (userHand === computerHand) {
    return "tie";
  } else if (
    (userHand === "rock" && computerHand === "scissors") ||
    (userHand === "paper" && computerHand === "rock") ||
    (userHand === "scissors" && computerHand === "paper")
  ) {
    return "user";
  } else {
    return "computer";
  }
}

function updateScore(result) {
    if (result === "user") {
        userScore++;
      } else if (result === "computer") {
        computerScore++;
      }
      
    
      document.querySelector(".score").textContent = userScore + "-" + computerScore;
      
      
      if (userScore === 5 || computerScore === 5) {
        endGame();
      }
}

function displayResultMessage() {
    const resultMessage = document.getElementById("resultMessage");
    if (userScore > computerScore) {
      resultMessage.textContent = "You win!";
    } else if (userScore < computerScore) {
      resultMessage.textContent = "Computer wins!";
    } else {
      resultMessage.textContent = "It's a tie!";
    }
    resultMessage.style.display = "block"; // Make sure the message is visible
    document.getElementById("playAgainBtn").style.display = "block";
}

function endGame() {
  document.querySelectorAll(".bottom-image").forEach(img => img.onclick = null);
  document.getElementById("playAgainBtn").style.display = "block";
}

function resetGame() {
    document.location.reload()
    userScore = 0;
    computerScore = 0;
    rounds = 0;
    document.querySelector(".score").textContent = "0-0";
    document.getElementById("resultMessage").textContent = "";
    document.getElementById("playAgainBtn").style.display = "none";
    
    
    const userHandImg = document.getElementById("userHand");
    userHandImg.removeAttribute("src");
    
    
    const computerHandImg = document.getElementById("computerHand");
    computerHandImg.removeAttribute("src");
}
