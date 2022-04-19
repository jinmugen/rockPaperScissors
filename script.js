

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
    if ((playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")) {
        return ('You Lose! '+ computerSelection+ ' beats '+ (playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase()))
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return ('Tied!')
    }
    else if ((playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") ||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") ||
    (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors")){
        return ('You Win! '+ (playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase()) + ' beats '+ computerSelection)
    }
}

const playerSelection = "sCISSors"
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
