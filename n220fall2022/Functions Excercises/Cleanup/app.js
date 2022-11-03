// Quinton Smith
// 11/3/2022
// N220-24603 Fall 2022

// Distance Calculator
const divMsg = document.getElementById("divMsg");
const textInput = document.getElementById("inputText");

//Make the number input a variable "inputVal" to use for 7 check
function stringFunction(){
    divMsg.innerHTML= stringCleanup(textInput.value);
}

function stringCleanup(inputString){
    let returnString = "";

    for(let i=0; i<inputString.length; i++){
        if(inputString[i] != "#"){
            returnString += inputString.substr(i,1);
        }
    }
    return returnString;
}

