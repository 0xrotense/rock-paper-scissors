// // List of game signal
// const gameName = ['rock','paper',"scissors"];

// // Ramdom gameName selector
// const computerPlay = () => {
//     return gameName[Math.floor(Math.random() * gameName.length)];
// }

// // Game function
// const playGame = (playerSelection = prompt().toLowerCase(), computerSelection = computerPlay()) => {

//     if(playerSelection === 'rock' && computerSelection === 'paper') {
//         return "You loose man! Paper beats Rock!";
//     } else if (playerSelection === 'rock' && computerSelection === "rock") {
//         return "You tied!";
//     } else if (playerSelection === "rock" && computerSelection === "scissors") {
//         return "Hurray! You won, Rock beats Scissors";
//     }
// }

// const rock = document.querySelector('#rock');
// const paper = document.querySelector ('paper');
// const scissors = document.querySelector('scissors');

// rock.addEventListener('click' )
// // Playing game to save result and display to log
// // const game = () => {
// //     for(let i = 0; i < 5; i++){
// //         let result = playGame();
// //         console.log(result);
// //     }
// // }


let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");

const getComputerChoice = () => {
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

const convertToWord = (letter) => {
    if(letter === 'rock') return 'Rock';
    if(letter === 'paper') return 'Paper';
    return "Scissors";
}

const win = (userChoice, computerChoice) => {
    const userSmallWord = "user".fontsize(3).sup()
    const compSmallWord = "comp".fontsize(3).sup()
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmallWord} beats ${convertToWord(computerChoice)}${compSmallWord}!`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
}

const lose = (userChoice, computerChoice) => {
    const userSmallWord = "user".fontsize(3).sup()
    const compSmallWord = "comp".fontsize(3).sup()
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmallWord} loses to ${convertToWord(computerChoice)}${compSmallWord}!`
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
}

const draw = (userChoice, computerChoice) => {
    const userSmallWord = "user".fontsize(3).sup()
    const compSmallWord = "comp".fontsize(3).sup()
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmallWord} equals ${convertToWord(computerChoice)}${compSmallWord}. It's a Draw!`
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300)
}


const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice)
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

const main = () => {
    rock_div.addEventListener('click', () => {
        game('rock');
    });
    
    paper_div.addEventListener('click', () => {
        game('paper');
    });
    
    scissors_div.addEventListener('click', () => {
        game('scissors');
    });
};

main();