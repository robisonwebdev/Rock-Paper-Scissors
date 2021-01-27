// Get player input
// Display a prompt asking user to pick between rock, paper, or scissors
// Save selection in variable

function playerPlay() {
    const playerChoice = prompt('Select Rock, Paper, or Scissors').toLocaleLowerCase();
    
    return playerChoice;
}

function gamePieceValidation(gamePiece) {
    if (gamePiece == 'rock' || gamePiece == 'paper' || gamePiece == 'scissors') {
       console.log('Correct Option!');
    } else {
        console.log('Invalid choice!');
    }
}

// Get computer input
// Have computer pick randomly between rock, paper, or scissors
// Save selection in variable

function computerPlay() {
    const gamePieces = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * 3);
    
    return gamePieces[random];
}

// Compare player input to computer input
// Rock beats scissors
// Scissors beats paper
// Paper beats rock
function playRound(playerSelections, computerSelection) {
    
}

// Display winner
// Track score
// Reset


// playRound(playerPlay(), computerPlay());