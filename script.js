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
        console.log('Tie!');
        console.log(`P ${playerSelections} | C ${computerSelection}`);
    } else if (playerSelections === 'rock' && computerSelection === 'scissors') {
        console.log(`Player's ${playerSelections} beats Computer's ${computerSelection}`);
    } else if (playerSelections === 'scissors' && computerSelection === 'paper') {
        console.log(`Player's ${playerSelections} beats Computer's ${computerSelection}`);
    } else if (playerSelections === 'paper' && computerSelection === 'rock') {
        console.log(`Player's ${playerSelections} beats Computer's ${computerSelection}`);
    } else if (computerSelection === 'rock' && playerSelections === 'scissors') {
        console.log(`Computer's ${computerSelection} beats Player's ${playerSelections}`);
    } else if (computerSelection === 'scissors' && playerSelections === 'paper') {
        console.log(`Computer's ${computerSelection} beats Player's ${playerSelections}`);
    } else if (computerSelection === 'paper' && playerSelections === 'rock') {
        console.log(`Computer's ${computerSelection} beats Player's ${playerSelections}`);
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
