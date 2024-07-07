// Variables
let playerPoints = 0;
let computerPoints = 0;
let playerChoice = null;
let computerChoice = null;

// DOM variables
const playerPointsUI = document.querySelector("#playerPoints");
const computerPointsUI = document.querySelector("#computerPoints");
const playerChoiceUI = document.querySelector("#playerChoice");
const computerChoiceUI = document.querySelector("#computerChoice");
const roundResultContainer = document.querySelector("#roundResultContainer");

// DOM containers
const playerPointContainer = document.querySelector("#playerPointContainer");
const computerPointContainer = document.querySelector("#computerPointContainer");
const playerChoiceContainer = document.querySelector("#playerChoiceContainer");
const computerChoiceContainer = document.querySelector("#computerChoiceContainer");

// Buttons
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

// Initialize UI
playerPointsUI.textContent = playerPoints;
computerPointsUI.textContent = computerPoints;

// Event listeners for player choices
rockBtn.addEventListener("click", () => {
    playerChoice = "rock";
    playerChoiceUI.textContent = "Rock";
    playRound();
});

paperBtn.addEventListener("click", () => {
    playerChoice = "paper";
    playerChoiceUI.textContent = "Paper";
    playRound();
});

scissorsBtn.addEventListener("click", () => {
    playerChoice = "scissors";
    playerChoiceUI.textContent = "Scissors";
    playRound();
});

// Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    const choice = choices[randomNumber];
    computerChoiceUI.textContent = choice.charAt(0).toUpperCase() + choice.slice(1); // Capitalize first letter
    computerChoiceContainer.appendChild(computerChoiceUI);
    return choice;
}

// Function to play a round
function playRound() {
    // Get computer choice
    computerChoice = getComputerChoice();

    // Determine the winner of the round
    if (playerChoice === computerChoice) {
        roundResultContainer.textContent = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerPoints++;
        roundResultContainer.textContent = 'You win!';
    } else {
        computerPoints++;
        roundResultContainer.textContent = 'Computer wins!';
    }

    // Update UI with points
    playerPointsUI.textContent = playerPoints;
    computerPointsUI.textContent = computerPoints;

    // Check if game is over
    if (playerPoints === 5 || computerPoints === 5) {
        gameOver();
    }
}

// Function to handle game over
function gameOver() {
    if (playerPoints === 5) {
        alert("You WIN!");
    } else {
        alert("Computer WINS!");
    }

    // Reset points
    playerPoints = 0;
    computerPoints = 0;
    playerPointsUI.textContent = playerPoints;
    computerPointsUI.textContent = computerPoints;

    // Remove event listeners
    rockBtn.removeEventListener("click", playRound);
    paperBtn.removeEventListener("click", playRound);
    scissorsBtn.removeEventListener("click", playRound);
}
