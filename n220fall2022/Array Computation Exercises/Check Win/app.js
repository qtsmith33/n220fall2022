//Quinton Smith
//11/10/2022
//N220 Fall 2022


// Check Win

// Assume that there is a game where if there are three 1's in a row in will count as a "win". 

// Create an application that: 

// Takes input from the user in a text field
// Assumes the input is a set of comma-separated values
// Splits the input into an array
// Uses a loop to check to see if there are three "1s" in a row in the array
// Displays the word "winner" or "not winner" on the document depending on the result


var inputTextBox = document.getElementById("inputText");
var divMsg = document.getElementById("divMsg");

//Function that takes the input
function winFunction(){
    let inputText = inputTextBox.value;
    //Then seperates it into an array where we encounter ","
    let inputArray = inputText.split(",");
    //establishes variables
    let oneTally = 0;
    let outputMsg = "not winner";

    //Loop that goes through each element of the array
    for(let i=0; i<inputArray.length; i++){
        //tracks the tally and if it reaches 3 changes outputMsg to "winner", sets to zero if encounters anything other than 1
        let inputNum = parseInt(inputArray[i]);
        if(inputNum == 1){
            oneTally++;
        } else{
            oneTally = 0;
        }
        if(oneTally == 3){
            outputMsg = "winner";
            break;
            
        }

    }
    //Lets us see the values on screen by changing div text
    divMsg.innerHTML = outputMsg;
    
}