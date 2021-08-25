let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

//Function that runs the game 5 times
let game = function() {
    for (let plays = 0; plays < 5; plays++) {
    // Variable that runs the random array picker for computer
    let randomAnswer = choices[Math.floor(Math.random()*choices.length)];

    // Variable to store the random array answer to a parameter for computer
    let computerSelection = randomAnswer; 
    let playerSelection = prompt("rock paper or scissors?").toLowerCase();

    // Here we run the function 
    playRound(playerSelection, computerSelection)
    }
    declareWinner(playerScore, computerScore);
};

// Function that calculates who wins 
// Also adds the points for who wins.
let playRound = function(a, b) {
    // Here if the player calls rock we call different situations based on rock
    if (a === "rock") {
    if (b === "rock") {
        alert("Both rock? Tie.");
    } else if (b === "paper") {
        alert("Rock vs Paper? Paper Wins!");
        computerScore++;
    } else {
        alert("Rock vs Scissors? Rock Win!");
        playerScore++;
    }
    
    // Here if the player calls paper we call different situations based on paper
    } else if (a === "paper") {
    if (b === "rock") {
        alert("Paper vs rock? Paper Wins!");
        playerScore++;
    } else if (b === "paper") {
        alert("Paper vs Paper? Tie.");
    } else {
        alert("Paper vs Scissors? Scissors Win!");
        computerScore++;
    }

    // Here if the player calls paper we call different situations based on paper
    } else {
    if (b === "scissors") {
        alert("Scissors vs Scissors? Tie.");
    } else if (b === "paper") {
        alert("Scissors vs Paper? Scissors Win!");
        playerScore++
    } else {
        alert("Scissors vs Rock? Rock Win!");
        computerScore++;
    }
    }
};

// Function considers who has more points and declares winner
let declareWinner = function(playerScore, computerScore) {
    if (playerScore > computerScore) {
    alert("Player has " + playerScore + " points.");
    alert("Player has more points! Player wins!");
    } else if (playerScore < computerScore) {
    alert("Computer has "+ computerScore + " points.");
    alert("Computer has more points! Computer Wins!");
    } else {
    alert("Both equal! We have a tie!");
    }
};

game();