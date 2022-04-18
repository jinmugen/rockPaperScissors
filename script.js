/*This function is the CPU player you are playing against. It will pick-
    a random choice from either rock, paper, or scissor. */

function computerPlay(string){
    const weapons = ['rock', 'paper', 'scissors'];
    const choice = weapons[Math.floor(Math.random()*weapons.length)];
    return choice;
    
}
console.log(computerPlay());

/*This function will initiate the round that compares the player's input-
    and the computer's input and declare the winner for the SINGLE ROUND */

function playRound(playerSelection,computerSelection){

}
