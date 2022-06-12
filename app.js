let selection = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    
    computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection;
}

//call the computerPlay function
computerPlay();