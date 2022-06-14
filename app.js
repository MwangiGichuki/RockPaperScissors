//create an array that contains rock paper scissors
let selection = ['Rock', 'Paper', 'Scissors'];

//function that allows the computer to select elements from the array
function computerPlay() {
    
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection;
}

//call the computerPlay function


//function that prompts the user to make a selection
/*function userPlay() {
    let playerSelection = prompt("Please choose one from the following: Rock, Paper, Scissors");
    return playerSelection;*/



//Function that plays a single round of Rock Paper Scissors game that takes two inputs
//playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
   if(playerSelection === "Paper" && computerSelection === "Rock") {
    return (`You Win! ${playerSelection} beats ${computerSelection}`)
   }
   else if(playerSelection === "Rock" && computerSelection === "Scissors") {
    return (`You Win! ${playerSelection} beats ${computerSelection}`)
   }
   else if(playerSelection === "Scissors" && computerSelection === "Paper") {
    return (`You Win! ${playerSelection} beats ${computerSelection}`)
   }
   else if(playerSelection === "Rock" && computerSelection === "Paper") {
    return (`You Lose! ${computerSelection} beats ${playerSelection}`)
   }
   else if(playerSelection === "Scissors" && computerSelection === "Rock") {
    return (`You Lose! ${computerSelection} beats ${playerSelection}`)
   }
   else if(playerSelection === "Paper" && computerSelection === "Scissors") {
    return (`You Lose! ${computerSelection} beats ${playerSelection}`)
   }
   else {
    return "It's a tie! Try again!"
   }

};

const playerSelection = "Rock";        //set the playerSelection to Rock to check if the function works
console.log(playerSelection); 
const computerSelection = computerPlay();   //variable to store the computer choice
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));  //Prints the result of the 1st round to the console
