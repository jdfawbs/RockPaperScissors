console.log("Hello World");
console.log("Welcome to Rock - Paper - Scissors");

//Declare the global variables
    //Create 2 variables called humanScore and computerScore to store and keep track of the game score.
let humanScore = 0;
let computerScore = 0;
    //Create getHumanChoice, getComputerChoice, roundResult variables
let humanChoice = "None";
let computerChoice = "None";
let roundResult = "None";

//Create a function called getComputerChoice that returns a random choice from Rock, Paper or Scissors.
function getComputerChoice() {
    //Create a variable computerChoice that gets assigned a randon number between 1 and 3
    computerChoice = Math.floor(Math.random() * 3);
        //If computerChoice equals 1 return "rock"  
        if (computerChoice == 0) {
            computerChoice = "rock";
         //If computerChoice equals 2 return "paper"
        } else if (computerChoice == 1) {
            computerChoice = "paper";
         //If computerChoice equals 3 return "scissors"
        } else {
            computerChoice ="scissors";
        }
}
  
//Create a function called getHumanChoice that prompts a user to enter a valid choice from Rock, Paper or Scissors.
function getHumanChoice() {
    //Create a prompt to ask the player to choose Rock, Paper or Scissors and assign their choice to the variable humanChoice
    humanChoice = prompt("Lets play Rock, Paper, Scissors, type in your choice","?");
    //Convert humanChoice to lowercase
    humanChoice = (humanChoice.toLowerCase());
    //If humanChoice is valid display "Your choice is ...." and return the value"    
    if ((humanChoice === ("rock")) || (humanChoice === ("paper")) || (humanChoice === ("scissors")))  {
        console.log("Your choice is " + humanChoice);
    //Else display "Your choice is not valid please choose again"
    } else {
        console.log("Your choice is not a valid choice, please choose again");
        getHumanChoice();
    }
}

getComputerChoice();
getHumanChoice();

playRound(computerChoice, humanChoice);

//Create a function called playRound with 2 parameters (humanChoice, computerChoice)
function playRound(computerChoice, humanChoice) {
     //Display the coumpters choice in the console
    console.log("The computers choice is " + computerChoice);
    console.log("Test " + humanChoice);
    //Game logic
        //If humanChoice = rock
        if (humanChoice === "rock") {
            //If computerChoice  = rock, return draw
            if (computerChoice === "rock") {
                console.log("It's a DRAW");
                roundResult = "draw";
            //Else If computerChoice = paper, return computer
            } else if (computerChoice === "paper") {
                console.log("Computer WINS");
                roundResult = "computer";
            //Else, return = human
            } else {
                console.log("You WIN!");
                roundResult = "human";
            }
        }  
        //Else If humanChoice =paper
        if (humanChoice === "paper") {
            //If computerChoice  = rock, return human
            if (computerChoice === "rock") {
                console.log("You WIN!");
                roundResult = "human";
            //Else If computerChoice = paper, return draw
            } else if (computerChoice === "paper") {
                console.log("It's a DRAW");
                roundResult = "draw";
            //Else, return = computer
            } else {
                console.log("Computer WINS");
                roundResult = "computer";
            }
        }
        //Else If humanChoice = scissors
        if (humanChoice === "scissors") {
            //If computerChoice  = rock, return computer
            if (computerChoice === "rock") {
                console.log("Computer WINS");
                roundResult = "computer";
            //Else If computerChoice = paper, return human
            } else if (computerChoice === "paper") {
                console.log("You WIN!");
                roundResult = "human";
            //Else, return = draw
            } else {
                console.log("It's a DRAW");
                roundResult = "draw";
            }
        }     
}

//Create a function call playGame that calls playGame
    //Play 5 rounds, create variable rounds = 0, play while rounds is less than 5 or (humanScore or computerScore) is less than 3
        //Declare the winner of each round    
            //If winner equals human, increment humanScore by 1 and display message "Well done you won that round!"
            //Else If winner equals computer increment computerScore by 1 and display message "Unlucky you lost that round"
            //Else display "It's a draw, play again"
        //Display the current score, humannScore : computerScore
    //Declare the winner of the game after 5 rounds or first to 3 rounds
        //If computerScore is greater than humanScore, then display "Bad luck Computer wins!"
        //Else If humanScore is greater than computerScore, then display "Congratulations, you win!"
        //Else, display "Unbelievable, it's a draw!"




//Display "Thank you for playing :-)"
console.log("Thank you for playing :-)");