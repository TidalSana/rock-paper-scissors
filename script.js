let playerSelection = "";
let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const img = document.querySelectorAll('.playerSelection');
const pRock = document.getElementById('p-rock');
const pPaper = document.getElementById('p-paper');
const pScissors = document.getElementById('p-scissors');
const cRock = document.getElementById('c-rock');
const cPaper = document.getElementById('c-paper');
const cScissors = document.getElementById('c-scissors');
const computerDiv = document.getElementById('computer-pick');
const playerP = document.getElementById('player');
const computerP = document.getElementById('computer'); 
const roundPlay = document.getElementById('roundPlay')

img.forEach((button) => {
  button.addEventListener('click', () => {
        if(button.id === "1") {
            playerSelection = "rock";
            pRock.classList.add('show');
            pPaper.classList.remove('show');
            pScissors.classList.remove('show');
        } else if (button.id === "2") {
            playerSelection = "paper";
            pRock.classList.remove('show');
            pPaper.classList.add('show');
            pScissors.classList.remove('show');
        } else {
            playerSelection = "scissors";
            pRock.classList.remove('show');
            pPaper.classList.remove('show');
            pScissors.classList.add('show');
        }
        game();
  });
});

let game = function() {
    let randomAnswer = choices[Math.floor(Math.random()*choices.length)];
    let computerSelection = randomAnswer;
    if (computerSelection === "rock") {
        cRock.classList.add('show');
        cPaper.classList.remove('show');
        cScissors.classList.remove('show');
    } else if (computerSelection === "paper") {
        cRock.classList.remove('show');
        cPaper.classList.add('show');
        cScissors.classList.remove('show');
    } else {
        cRock.classList.remove('show');
        cPaper.classList.remove('show');
        cScissors.classList.add('show');
    }
    
    // setTimeout(function() {
    //     playRound(playerSelection, computerSelection);
    // }, 1000);
    playRound(playerSelection, computerSelection);

    playerP.textContent = "Player: " + playerScore;
    computerP.textContent = "Computer: " + computerScore;
   
    if (playerScore > computerScore && playerScore == 5) {
        alert("Player has " + playerScore + " points.");
        alert("Computer has " + computerScore + " points.")
        alert("Player has more points! Player wins!");
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore < computerScore && computerScore == 5) {
        alert("Computer has "+ computerScore + " points.");
        alert("Player has " + playerScore + " points.")
        alert("Computer has more points! Computer Wins!");
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore == 5 && computerScore == 5) {
        alert("Both equal! We have a tie!");   
        playerScore = 0;
        computerScore = 0;
    } 
}

let playRound = function(a, b) {
    // Here if the player calls rock we call different situations based on rock
    if (a === "rock") {
        if (b === "rock") {
            roundPlay.textContent = "Both rock? Tie.";
        } else if (b === "paper") {
            roundPlay.textContent = "Rock vs Paper? Paper Wins!";
            computerScore++;
        } else {
            roundPlay.textContent = "Rock vs Scissors? Rock Win!";
            playerScore++;
        }
    // Here if the player calls paper we call different situations based on paper
    } else if (a === "paper") {
        if (b === "rock") {
            roundPlay.textContent = "Paper vs rock? Paper Wins!";
            playerScore++;
        } else if (b === "paper") {
            roundPlay.textContent = "Paper vs Paper? Tie.";
        } else {
            roundPlay.textContent = "Paper vs Scissors? Scissors Win!";
            computerScore++;
        }
    // Here if the player calls paper we call different situations based on paper
    } else {
        if (b === "scissors") {
            roundPlay.textContent = "Scissors vs Scissors? Tie.";
        } else if (b === "paper") {
            roundPlay.textContent = "Scissors vs Paper? Scissors Win!";
            playerScore++
        } else {
            roundPlay.textContent = "Scissors vs Rock? Rock Win!";
            computerScore++;
        }
    }
};