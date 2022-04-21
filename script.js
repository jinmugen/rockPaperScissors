
/*This function is the CPU player you are playing against. It will pick-
    a random choice from either rock, paper, or scissors. */

function computerPlay(){
    let weapons = ['Rock', 'Paper', 'Scissors'];
    let choice = weapons[Math.floor(Math.random()*weapons.length)];
    return choice;   
}

/*This function will initiate the round that compares the player's input-
    and the computer's input and declare the winner for the SINGLE ROUND */

function playRound(playerSelection,computerSelection){
    let lose = 'You Lose! '+ computerSelection+ ' beats '+ (playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase());
    let win = 'You Win! '+ (playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase()) + ' beats '+ computerSelection;

    if ((playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")) {
    console.log(lose);
    computerScore++;
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
     console.log('Tie!');
    }
    else if ((playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") ||
    (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors")){
    console.log(win);
    playerScore++;
    }
}



/*This function plays the playRound() function FIVE times and keeps-
    track of the score between the players and reports a winner at
    the end of said five rounds*/

let matches = 0;
function game(){
    for (let i = 0; i < 5; i++){

        if (matches < 5){
            console.log(playerSelection = prompt('which weapon?'));
            playRound(playerSelection,computerSelection);
            matches++;   
        }
    } 
    
    if (playerScore > computerScore){
        console.log('YOU WIN!');
    }
    else {
        console.log('YOU LOST!');
    }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;
const computerSelection = computerPlay();

console.log(game());