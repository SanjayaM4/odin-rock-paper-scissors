function getComputerChoice(){
    
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0)
    {
        choice = "rock";
    }
    else if (choice === 1)
    {
        choice = "paper";
    }
    else if (choice === 2)
    {
        choice = "scissors"
    }
    else choice = "error";

    return choice;
}

function getPlayerChoice(){
    let choice = prompt("Please choose Rock, Paper or Scissors");
    if (choice)
    {
        return (choice.toLowerCase());
    }
    else
        return "error";
}

function playRound(e){

    document.querySelector("#finalResult").textContent = "";

    const container = document.querySelector("#roundResult");

    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();

    
    if ((computerSelection === "rock" && playerSelection === "rock")
    || (computerSelection === "paper" && playerSelection === "paper")
    || (computerSelection === "scissors" && playerSelection === "scissors"))
    {
        container.textContent = `It's a draw, you both chose ${playerSelection}`;
        return;
    }
    else if ((computerSelection === "rock" && playerSelection === "paper")
    || (computerSelection === "paper" && playerSelection === "scissors")
    || (computerSelection === "scissors" && playerSelection === "rock"))
    {
        container.textContent = `You win! Your ${playerSelection} beats the Opponent's ${computerSelection}`;
        updatePlayerScore();
        return;
    }
    else if ((computerSelection === "rock" && playerSelection === "scissors")
    || (computerSelection === "paper" && playerSelection === "rock")
    || (computerSelection === "scissors" && playerSelection === "paper"))
    {
        container.textContent = `You lose! Your opponent's ${computerSelection} beats your ${playerSelection}`;
        updateComputerScore();
        return;
    }
    else if ((playerSelection === "error") 
    || (playerSelection !== "rock") 
    || (playerSelection !== "paper") 
    || (playerSelection !== "scissors"))
    {
        container.textContent = "Please enter a valid choice.";
        return;
    }
    else
        container.textContent = "An unforeseen error occurred.";
        return;
}


function updatePlayerScore(){

    playerScore++;

    const container = document.querySelector("#playerScore");

    container.textContent = playerScore;

    if (playerScore >= 5)
    {
        gameEnd();
    }

}

function updateComputerScore(){

    computerScore++;

    const container = document.querySelector("#computerScore");

    container.textContent = computerScore;

    if (computerScore >= 5)
    {
        gameEnd();
    }

}

function gameEnd(){

    const result = document.querySelector("#finalResult");

    if (playerScore > computerScore)
    {
        result.textContent = "You Won the Game";
    }
    else
    {
        result.textContent = "You Lost the Game";
    }

    playerScore = 0;
    computerScore = 0;

    document.querySelector("#playerScore").textContent = 0;
    document.querySelector("#computerScore").textContent = 0;
}

let playerScore = 0;
let computerScore = 0;

const choices = Array.from(document.getElementsByClassName("choice"));
choices.forEach(choice => choice.addEventListener('click', playRound));