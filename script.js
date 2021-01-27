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

function compareResults(playerSelections, computerSelection) {
    if (playerSelections === computerSelection) {
        displayWinner(undefined, undefined, undefined, undefined, true);
    } else if (playerSelections === 'rock' && computerSelection === 'scissors') {
        displayWinner('Player', playerSelections, 'Computer', computerSelection);
    } else if (playerSelections === 'scissors' && computerSelection === 'paper') {
        displayWinner('Player', playerSelections, 'Computer', computerSelection);
    } else if (playerSelections === 'paper' && computerSelection === 'rock') {
        displayWinner('Player', playerSelections, 'Computer', computerSelection);
    } else if (computerSelection === 'rock' && playerSelections === 'scissors') {
        displayWinner('Computer', computerSelection, 'Player', playerSelections);
    } else if (computerSelection === 'scissors' && playerSelections === 'paper') {
        displayWinner('Computer', computerSelection, 'Player', playerSelections);
    } else if (computerSelection === 'paper' && playerSelections === 'rock') {
        displayWinner('Computer', computerSelection, 'Player', playerSelections);
    }
}

// Display Winner
function displayWinner(winner, winnerHand, loser, loserHand, tie = false) {
    if (tie) {
        alert("Tie game!");
    } else if (winner != undefined) {
        alert(`${winner} Wins! ${winner}'s ${winnerHand}, beats ${loser}'s ${loserHand}!`)
    }
}

function playRound() {
    // Compare user/computer
    compareResults(playerPlay(), computerPlay());
    // Display winner
}

// Display winner
// Track score
// Reset


playRound();
