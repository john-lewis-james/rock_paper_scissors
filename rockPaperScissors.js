

function computerPlay (x) {

    x = Math.floor((Math.random() * 10));

    if (x<=3){ 
        return "Rock";
    }
    else if (x<=6){
        return "Paper";
    }
    else{
        return "Scissors";
    }

}

function roundOfRPS (playerSelection, computerSelection){

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return ("It's a draw! " + String(computerSelection));
    
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){ 
        return "Rock! You win over scissors!";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){ 
        return "Paper! You win over rock!";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){ 
        return "Scissors! You win over paper!";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){ 
        return "Rock! You lose to paper!";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){ 
        return "Paper! You lose to scissors!";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){ 
        return "Scissors! You lose to rock!";
    }
    else{

        return "Game over";
    }

}

function theGame(){
    counter = 0;
    humanWins = 0;
    computerWins = 0;
     for (let counter = 0; counter <5; counter++){
         let chooseMe = window.prompt("Rock, paper or scissors?");
         let result = roundOfRPS(chooseMe, computerPlay()) + String("bi")
         //console.log(result);
         if (result.includes("win") == true){
                humanWins++;
            } 
           else if (result.includes("lose") == true){
              computerWins++
          }
            else if (result.includes("draw") == true){
                counter--
            }
        }
    //console.log(computerWins);
    //console.log(humanWins);
    if (humanWins > computerWins){
        console.log ("Human wins with " + String(humanWins) + " to " + String(computerWins) + " !!")
    }
    else if (computerWins > humanWins){
        console.log ("Computer wins with " + String(computerWins) + " to " + String(humanWins) + " !!")
    }
    else {
        console.log("It's a tie!")
    }


    //return console.log(counter);

}
    
theGame()
//console.log(theGame())
//console.log(roundOfRPS(chooseMe, computerPlay()))


//counter = 0;
//for (let counter = 0; counter <5; counter++){
//    console.log(roundOfRPS(chooseMe, computerPlay()) + String("hi"));
//}

