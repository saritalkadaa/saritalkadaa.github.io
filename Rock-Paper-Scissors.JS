console.log("choose rock, paper, or scissors!");

function getUserChoice(userInput){
  userInput=userInput.toLowerCase()
  if (userInput==='rock' ||userInput==='paper'|| userInput==='scissors'){
    return userInput;
  }
  else
    console.log("That isn't one of the choices!");
}

function getComputerChoice(){
   var random=Math.floor(Math.random()*3);
  if (random===0){
    return 'rock';
  }
  else if (random===1){
    return 'paper';
  }
  else{
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice===computerChoice){
    return("it's a tie! Try again");
  }
  else if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return('You lost! paper beats rock!');
    }
    else if(computerChoice==='scissors'){
      return("You won! Rock beats scissors!");
    }
  }
  else if(userChoice==='paper'){
    if(computerChoice==='rock'){
      return('you won! paper beats rock.')
    }
    else if(computerChoice==='scissors'){
      return('you lost! scissors cut paper!');
    }
  }
  else if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      reutrn('you lost!rock beats scissors');
    }
    else if(computerChoice==='paper'){
      return("You won! Scissors cut paper!");
    }
  }
}

function playGame(){
  userChoice=getUserChoice('ROCK');
  computerChoice=getComputerChoice('PAPER');
  console.log('You chose '+userChoice);
  console.log('the computer chose '+ computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
