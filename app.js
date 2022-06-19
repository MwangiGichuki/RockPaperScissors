//create global variables that store computer and computer scores
let playerScore = 0;
let computerScore = 0;


let selection = ['Rock', 'Paper', 'Scissors'];

//function that allows the computer to select elements from the array
function computerPlay() {
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];
    computerSelection = computerSelection.toUpperCase();
    return computerSelection;
}


//function that prompts the user to make a selection

/*function userPlay() {
    let playerSelection = prompt("Please choose one from the following: Rock, Paper, Scissors");
    return playerSelection;
}*/

//Create variables that specify who won
let playerWin = "You win!";
let computerWin = "Computer won!";
let draw = "Its a tie!";


//Function that plays a single round of Rock Paper Scissors game that takes two inputs
//playerSelection and computerSelection

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        return playerWin;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        return playerWin;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        return playerWin;
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore++;
        return computerWin;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++;
        return computerWin;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++;
        return computerWin;
    }
    else if (playerSelection === computerSelection) {
        return draw;
    }
    else {
        return "Please try again!";
    }


};

//Create a game function that plays for 5 rounds and announces the winner of the game

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round # " + i);
        let playerSelection = prompt("Pick one: Rock, Paper or Scissors: ");
        playerSelection = playerSelection.toUpperCase();
        console.log("You chose " + playerSelection);
        let computerSelection = computerPlay();
        console.log("The computer chose " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));

    }

    console.log("Game over!");

    if (playerScore > computerScore) {
        alert("Congratulations! You win!")
    }
    else if (computerScore > playerScore) {
        alert("Computer won! Sorry! Try again!")
    }
    else if (computerScore === playerScore) {
        alert("It's a tie! Play again!")
    }
    else {
        alert("Try again!")
    }

    console.log(`Computer score: ${computerScore} , Player score: ${playerScore}`);

}


console.log(game());