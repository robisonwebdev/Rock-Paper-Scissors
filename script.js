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
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        displayWinner('Player', playerSelection, computerSelection);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        displayWinner('Player', playerSelection, computerSelection);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        displayWinner('Player', playerSelection, computerSelection);
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        displayWinner('Computer', computerSelection, playerSelection);
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        displayWinner('Computer', computerSelection, playerSelection);
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        displayWinner('Computer', computerSelection, playerSelection);
    }
}

// Display Winner
function displayWinner(winner, winnerHand, loserHand, tie = false) {
    if (tie) {
        alert("Tie game!");
    } else if (winner != undefined) {
        alert(`${winner} wins! ${winnerHand.charAt(0).toUpperCase() + winnerHand.slice(1)} beats ${loserHand}!`)
    }
}

// Starts a single round of the game by calling compareResults
function playRound() {
    compareResults(playerPlay(), computerPlay());
}

playRound();



// Track score
// Reset
