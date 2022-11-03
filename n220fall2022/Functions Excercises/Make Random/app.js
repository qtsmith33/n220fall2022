// Quinton Smith
// 11/3/2022
// N220-24603 Fall 2022

// Distance Calculator

const divMsg = document.getElementById("divMsg");

//Make the number input a variable "inputVal" to use for 7 check
function numberMsg(){
    //name takes the actual text from the input "nameInput" and stores it as a string.
   generateNumber();
}

function generateNumber(){
    let randomNumber = Math.floor(Math.random()*11);
    divMsg.innerHTML= randomNumber
}
