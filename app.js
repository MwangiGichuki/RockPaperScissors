//create an array that contains rock paper scissors
let selection = ['Rock', 'Paper', 'Scissors'];

//function that allows the computer to select elements from the array
function computerPlay() {
    
    computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection;
}

//call the computerPlay function
computerPlay();