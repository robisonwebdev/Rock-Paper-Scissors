// Get player input
    // Display a prompt asking user to pick between rock, paper, or scissors
    // Save selection in variable

// Get computer input
    // Have computer pick randomly between rock, paper, or scissors
    // Save selection in variable

// Compare player input to computer input
    // Rock beats scissors
    // Scissors beats paper
    // Paper beats rock

// Display winner
// Track score
// Reset

function computerPlay() {
    const gamePieces = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * 3);

    return gamePieces[random];
}

function playSingleRound(playerSelections, computerSelection) {

}