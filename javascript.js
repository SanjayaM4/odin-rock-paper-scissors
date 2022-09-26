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

function playRound(playerSelection, computerSelection){
    if ((computerSelection === "rock" && playerSelection === "rock")
    || (computerSelection === "paper" && playerSelection === "paper")
    || (computerSelection === "scissors" && playerSelection === "scissors"))
    {
        return `It's a draw, you both chose ${playerSelection}`
    }
    else if ((computerSelection === "rock" && playerSelection === "paper")
    || (computerSelection === "paper" && playerSelection === "scissors")
    || (computerSelection === "scissors" && playerSelection === "rock"))
    {
        return `You win! Your ${playerSelection} beats the Opponent's ${computerSelection}`
    }
    else if ((computerSelection === "rock" && playerSelection === "scissors")
    || (computerSelection === "paper" && playerSelection === "rock")
    || (computerSelection === "scissors" && playerSelection === "paper"))
    {
        return `You lose! Your opponent's ${computerSelection} beats your ${playerSelection}`
    }
    else if ((playerSelection === "error") 
    || (playerSelection !== "rock") 
    || (playerSelection !== "paper") 
    || (playerSelection !== "scissors"))
    {
        return "Please enter a valid choice."
    }
    else
        return "An unforeseen error occurred."
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));