// Global Score Tracker
let playerScore = 0;
let computerScore = 0;

// Get the player's input and send if off to be validated
// Once validated, return choice
function playerPlay() {
    const playerChoice = prompt('Select Rock, Paper, or Scissors');    
    
    return gamePieceValidation(playerChoice);
}

// Validates player input by converting to lower case 
// and checking with switch statement, if not valid prompt again.
function gamePieceValidation(gamePiece) {
    while(true) {
        gamePiece = gamePiece.toLowerCase();

        switch (gamePiece) {
            case 'rock':
                return gamePiece;
            case 'paper':
                return gamePiece;
            case 'scissors':
                return gamePiece;
            default:
                gamePiece = prompt('Invalid option, pick again.');
        }
    }
}

// Computer selects a random option from gamePieces array and returns it
function computerPlay() {
    const gamePieces = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    
    return gamePieces[random];
}

// Compare player input to computer input
// Rock beats scissors
// Scissors beats paper
// Paper beats rock
function compareResults(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        displayWinner(undefined, undefined, undefined, true);
        scoreTracker(0, 0);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        displayWinner('Player', playerSelection, computerSelection);
        scoreTracker(1, 0);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        displayWinner('Player', playerSelection, computerSelection);
        scoreTracker(1, 0);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        displayWinner('Player', playerSelection, computerSelection);
        scoreTracker(1, 0);
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        displayWinner('Computer', computerSelection, playerSelection);
        scoreTracker(0, 1);
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        displayWinner('Computer', computerSelection, playerSelection);
        scoreTracker(0, 1);
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        displayWinner('Computer', computerSelection, playerSelection);
        scoreTracker(0, 1);
    }
}

// Display Winner
function displayWinner(winner, winnerHand, loserHand, tie = false) {
    if (tie) {
        return alert("Tie game!");
    } else if (winner != undefined) {
        return alert(`${winner} wins! ${winnerHand.charAt(0).toUpperCase() + winnerHand.slice(1)} beats ${loserHand}!`)
    }
}

// Score Tracker
function scoreTracker(player, computer) {
    playerScore += player;
    computerScore += computer;
}

// Starts a single round of the game by calling compareResults
function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    compareResults(playerSelection, computerSelection);
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

game();


// Reset
