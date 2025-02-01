console.log("Welcome to Rock - Paper - Scissors");
console.log("Best of 5 rounds or first to 3 wins!");

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

//Create a function called playRound with 2 parameters (humanChoice, computerChoice)
function playRound(computerChoice, humanChoice) {
     //Display the coumpters choice in the console
    console.log("The computers choice is " + computerChoice);
    //Game logic
        //If humanChoice = rock
        if (humanChoice === "rock") {
            //If computerChoice  = rock, return draw
            if (computerChoice === "rock") {
                roundResult = "draw";
            //Else If computerChoice = paper, return computer
            } else if (computerChoice === "paper") {
                roundResult = "computer";
            //Else, return = human
            } else {
                roundResult = "human";
            }
        }  
        //Else If humanChoice =paper
        if (humanChoice === "paper") {
            //If computerChoice  = rock, return human
            if (computerChoice === "rock") {
                roundResult = "human";
            //Else If computerChoice = paper, return draw
            } else if (computerChoice === "paper") {
                roundResult = "draw";
            //Else, return = computer
            } else {
                roundResult = "computer";
            }
        }
        //Else If humanChoice = scissors
        if (humanChoice === "scissors") {
            //If computerChoice  = rock, return computer
            if (computerChoice === "rock") {
                roundResult = "computer";
            //Else If computerChoice = paper, return human
            } else if (computerChoice === "paper") {
                roundResult = "human";
            //Else, return = draw
            } else {
                roundResult = "draw";
            }
        }
return roundResult;  
}

//Create a function call playGame that calls playGame
function playGame(roundResult) {
    //Play 5 rounds, create variable roundNumber = 0, play while rounds is less than 5 or (humanScore or computerScore) is less than 3
    let roundNumber = 1;

    while ((roundNumber < 6) && (computerScore != 3) && (humanScore != 3)) {
        //Display the round numnber
        console.log("Round " + roundNumber);

        //call the getComputerChoice and getHumanChoice functions
        getComputerChoice();
        getHumanChoice();
        //call the playRound function
        roundResult = playRound(computerChoice, humanChoice);

        //Declare the winner of each round
             //If winner equals human, increment humanScore by 1 and display message "Well done you won that round!"    
        if (roundResult == "human") {
            console.log("You WIN this round!");
            humanScore = humanScore + 1;
            //Else If winner equals computer increment computerScore by 1 and display message "Unlucky you lost that round"
        } else if (roundResult == "computer") {
            console.log("The computer WINS this round");
            computerScore = computerScore + 1;
            //Else display "It's a draw, play again"
        } else {
            console.log("This round is a DRAW");
        }
        //Display the current score, humannScore : computerScore
        console.log("The game score is: You: " + humanScore + " -- Computer: " + computerScore);
        roundNumber = roundNumber +1;  
    }      
    //Declare the winner of the game after 5 rounds or first to 3 rounds
        //If computerScore is greater than humanScore, then display "Bad luck Computer wins!"
    if (computerScore > humanScore) {
        console.log("Bad luck the computer won this game :-(");
        //Else If humanScore is greater than computerScore, then display "Congratulations, you win!"
    } else if (humanScore > computerScore) {
        console.log("Congratulations you won the game :-) !!");
        //Else, display "Unbelievable, it's a draw!"
    } else {
        console.log("Unbelieveable, it's a draw! Play again?");
    }
}

//Call the playGame function to start the game
playGame();

//Display "Thank you for playing :-)"
console.log("Thank you for playing :-)");