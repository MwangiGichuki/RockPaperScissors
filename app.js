//create an array that contains rock paper scissors
let selection = ['Rock', 'Paper', 'Scissors'];

//function that allows the computer to select elements from the array
function computerPlay() {
    
    computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection;
}

//call the computerPlay function
computerPlay();

//function that prompts the user to make a selection
function userPlay() {
    let playerSelection = prompt("Please choose one from the following: Rock, Paper, Scissors");
    return playerSelection;
}

userPlay();
