//Quinton Smith
//11/16/2022
//N220 Fall 2022

// 3 buttons on the page (one for rock, one for paper, one for scissors)
// One div for showing output 
// Each button has a data attribute for the move
// One function invoked when any button is clicked
// When the button is clicked
// Get the player move
// randomly select a move for the computer
// Compare the two using if/else ifs to figure out which side won/lost/tie'd
// Show the output from the current round on the div as: `Computer chose XMOVE, player chose YMOVE, FINAL_OUTCOME`

// For example, if the user input "clear water is clear", there are 3 bad words in the string.

//making a variable for all of the input and output fields
var userChoice = document.getElementById("buttonText");
var computerChoice = document.getElementById("findMsg");
var outcome = document.getElementById("outcomeMsg");


function rockpaperscissorsFunction(){
    
    let inputText = inputBox.value;
    //Then seperates it into an array where we encounter " "
    let inputArray = inputText.split(" ");
    //establishes variables
    let find = "not found";
    let tally = 0;
    
    //Loop that goes through each element of the array
    for(let i=0; i<inputArray.length; i++){
        //turns into number and adds it to variable established above, set to 0 previously
        if(inputArray[i] == "clear" || inputArray[i] == "water" || inputArray[i] == "tires" ){
            find = "found";
            tally++;
        }
    }
        //Lets us see the values on screen by changing div text
        findMsg.innerHTML = "Problem? " + find;
        outcomeMsg.innerHTML = "Tally: " + tally;

}