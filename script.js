// Global Score Tracker
let playerScore = 0;
let computerScore = 0;

// Get the player's input and send if off to be validated
// Once validated, return choice
function playerPlay() {
    // const playerChoice = prompt('Select Rock, Paper, or Scissors');  // Remove Later  
    

    // if (rock) {
    //     return 'rock';
    // } else if (paper) {
    //     return 'paper';
    // } else if (scissors) {
    //     return 'scissors'
    // }
    
    // return gamePieceValidation(playerChoice);
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
        roundWinner(undefined, undefined, undefined, true);
        scoreTracker(0, 0);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundWinner('Player', playerSelection, computerSelection);
        scoreTracker(1, 0);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundWinner('Player', playerSelection, computerSelection);
        scoreTracker(1, 0);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundWinner('Player', playerSelection, computerSelection);
        scoreTracker(1, 0);
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        roundWinner('Computer', computerSelection, playerSelection);
        scoreTracker(0, 1);
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        roundWinner('Computer', computerSelection, playerSelection);
        scoreTracker(0, 1);
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        roundWinner('Computer', computerSelection, playerSelection);
        scoreTracker(0, 1);
    }
}

// Display winner of round
function roundWinner(winner, winnerHand, loserHand, tie = false) {
    if (tie) {
        return console.log("Tie game!");
    } else if (winner != undefined) {
        return console.log(`${winner} wins! ${winnerHand.charAt(0).toUpperCase() + winnerHand.slice(1)} beats ${loserHand}!`)
    }
}

// Game winner
function gameWinner() {
    if (playerScore === computerScore) {
        console.log('Tie game! No Winners');
    } else if (playerScore > computerScore) {
        console.log('Player wins the game!');
    } else if (computerScore > playerScore) {
        console.log('Computer wins the game!');
    }
}

// Score Tracker
function scoreTracker(player, computer) {
    const displayPlayerScore = document.querySelector('#playerScore');
    const displayComputerScore = document.querySelector('#computerScore');

    playerScore += player;
    computerScore += computer;

    displayPlayerScore.innerHTML = playerScore;
    displayComputerScore.innerHTML = computerScore;
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);  // Remove Later
}

// Set player name
function setPlayerName(name) {
    const playerName = document.querySelector('#playerName');

    if (name == "") {
        playerName.innerHTML = 'Player 1';
    } else {
        playerName.innerHTML = name;
    }
}

// gameSetup display control
function gameSetupDisplay(value) {
    const gameSetup = document.querySelector('#gameSetup');

    if (value) {
        gameSetup.style.display = 'flex';
    } else {
        gameSetup.style.display = 'none';
    }
}

// Starts a single round of the game by calling compareResults
function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    compareResults(playerSelection, computerSelection);
}

// Reset
function resetScore() {
    playerScore = 0;
    computerScore = 0;
    scoreTracker(playerScore, computerScore);
}

//Reset display control
function resetDisplay(value) {
    const reset = document.querySelector('#reset');

    if (value) {
        reset.style.display = 'flex';
    } else {
        reset.style.display = 'none';
    }
}

// DOM
const rock = document.querySelector('#playerRock');
const rockIcon = document.querySelector('#playerRock i');
const paper = document.querySelector('#playerPaper');
const paperIcon = document.querySelector('#playerPaper i');
const scissors = document.querySelector('#playerScissors');
const scissorsIcon = document.querySelector('#playerScissors i');
const nameValue = document.querySelector('#playerNameInput');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');

// EventListener functions
const rockHandler = function() {
    compareResults('rock', computerPlay());
};

const rockEnter = function() {
    rockIcon.style.color = 'var(--red)';
}

const rockLeave = function() {
    rockIcon.style.color = 'var(--redLight)';
}

const paperHandler = function() {
    compareResults('paper', computerPlay());
};

const paperEnter = function() {
    paperIcon.style.color = 'var(--red)';
}

const paperLeave = function() {
    paperIcon.style.color = 'var(--redLight)';
}

const scissorsHandler = function() {
    compareResults('scissors', computerPlay());
};

const scissorsEnter = function() {
    scissorsIcon.style.color = 'var(--red)';
}

const scissorsLeave = function() {
    scissorsIcon.style.color = 'var(--redLight)';
}

// EventListeners
startBtn.addEventListener('click', () => {
    setPlayerName(nameValue.value);
    rock.addEventListener('click', rockHandler, false);
    rockIcon.addEventListener('mouseenter', rockEnter);
    rockIcon.addEventListener('mouseleave', rockLeave);
    paper.addEventListener('click', paperHandler, false);
    paperIcon.addEventListener('mouseenter', paperEnter);
    paperIcon.addEventListener('mouseleave', paperLeave);
    scissors.addEventListener('click', scissorsHandler, false);
    scissorsIcon.addEventListener('mouseenter', scissorsEnter);
    scissorsIcon.addEventListener('mouseleave', scissorsLeave);
    gameSetupDisplay(false);
    resetDisplay(true);
}, true)

resetBtn.addEventListener('click', () => {
    resetScore();
    rock.removeEventListener('click', rockHandler, false);
    rockIcon.removeEventListener('mouseenter', rockEnter);
    rockIcon.removeEventListener('mouseleave', rockLeave);
    paperIcon.removeEventListener('mouseenter', paperEnter);
    paperIcon.removeEventListener('mouseleave', paperLeave);
    paper.removeEventListener('click', paperHandler, false);
    scissors.removeEventListener('click', scissorsHandler, false);
    scissorsIcon.removeEventListener('mouseenter', scissorsEnter);
    scissorsIcon.removeEventListener('mouseleave', scissorsLeave);
    gameSetupDisplay(true);
    resetDisplay(false);
});

scoreTracker(playerScore, computerScore);