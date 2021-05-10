let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10)
};


function compareGuesses(userInt, computerInt, targetInt){

let userNum = 0
let computerNum = 0

if(userInt >= targetInt){
     userNum = userInt - targetInt
 }else if(userInt < targetInt){
     userNum = targetInt - userInt
 }

 if (computerInt >= targetInt){
     computerNum = computerInt - targetInt
 }else if(computerInt < targetInt){
     computerNum = targetInt - computerInt
 }

 if(computerNum === userNum){
     return true
 }else if(userNum < computerNum){
     return true
 }else if(computerNum < userNum){
     return false
 }
}

function updateScore(stringPassed){
    if(stringPassed === 'human'){
        return humanScore = humanScore +1
    }else if(stringPassed === 'computer'){
        return computerScore = computerScore + 1
    }
}

function advanceRound(){
    currentRoundNumber = currentRoundNumber +1
    return currentRoundNumber
}