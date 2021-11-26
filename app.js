// List of game signal
const gameName = ['rock','paper',"scissors"];

// Ramdom gameName selector
const computerPlay = () => {
    return gameName[Math.floor(Math.random() * gameName.length)];
}

// Game function
const playGame = (playerSelection = prompt().toLowerCase(), computerSelection = computerPlay()) => {

    if(playerSelection === 'rock' && computerSelection === 'paper') {
        return "You loose man! Paper beats Rock!";
    } else if (playerSelection === 'rock' && computerSelection === "rock") {
        return "You tied!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Hurray! You won, Rock beats Scissors";
    }
}

// Playing game to save result and display to log
const game = () => {
    for(let i = 0; i < 5; i++){
        let result = playGame();
        console.log(result);
    }
}