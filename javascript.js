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
        console.log(`It's a draw, you both chose ${playerSelection}`);
        return 0;
    }
    else if ((computerSelection === "rock" && playerSelection === "paper")
    || (computerSelection === "paper" && playerSelection === "scissors")
    || (computerSelection === "scissors" && playerSelection === "rock"))
    {
        console.log(`You win! Your ${playerSelection} beats the Opponent's ${computerSelection}`);
        return 1;
    }
    else if ((computerSelection === "rock" && playerSelection === "scissors")
    || (computerSelection === "paper" && playerSelection === "rock")
    || (computerSelection === "scissors" && playerSelection === "paper"))
    {
        console.log(`You lose! Your opponent's ${computerSelection} beats your ${playerSelection}`);
        return -1;
    }
    else if ((playerSelection === "error") 
    || (playerSelection !== "rock") 
    || (playerSelection !== "paper") 
    || (playerSelection !== "scissors"))
    {
        console.log("Please enter a valid choice.");
        return 0;
    }
    else
        console.log("An unforeseen error occurred.");
        return 0;
}


function game(){

    let score = 0;

    for (let i = 0; i < 5; i++)
        score += playRound(getPlayerChoice(), getComputerChoice());

    if (score > 0)
        console.log("You Win!");
    else if (score < 0)
        console.log("You Lose!");
    else 
        console.log("It's a Draw!");
}

game();