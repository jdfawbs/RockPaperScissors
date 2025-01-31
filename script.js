console.log("Hello World");
console.log("Welcome to Rock - Paper - Scissors");

//Declare the global variables
    //Create 2 variables called humanScore and computerScore to store and keep track of the game score.
let humanScore = 0;
let computScore = 0;
    //Create getHumanChoice and getComputerChoice variables
let HumanChoice = "None";
let ComputerChoice = "None";

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
    humanChoice = prompt("Lets play Rock, Paper, Scissors, type in your choice","None");
    //Convert humanChoice to lowercase
    humanChoice = (humanChoice.toLowerCase());
    //If humanChoice equals rock, paper or scissors the display "Your choice is ...." and return the value
    if humanChoice == "rock" || "paper" ||"scissors" {
        console.log("Your choice is " + humanChoice  + ".");
    //Else display "Your choice is not valid, please choose again" and prompt the player to choose again      
    } else {
        console.log("Your choice is not a valid choice, please choose again");
        getHumanChoice();
    }
}

//Create a function called playRound with 2 parameters (humanChoice, computerChoice)
    //Display the coumpters choice in the console
    //Game logic
        //If humanChoice = rock
            //If computerChoice  = rock, return draw
            //Else If computerChoice = paper, return computer
            //Else, return = human
        //Else If humanChoice =paper
            //If computerChoice  = rock, return human
            //Else If computerChoice = paper, return draw
            //Else, return = computer
        //Else If humanChoice = scissors
            //If computerChoice  = rock, return computer
            //Else If computerChoice = paper, return human
            //Else, return = draw
   
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

getComputerChoice()
console.log(computerChoice)

//Display "Thank you for playing :-)"
console.log("Thank you for playing :-)");