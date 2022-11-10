//Quinton Smith
//11/10/2022
//N220 Fall 2022

// Bad word catcher with loops

 

// For the purposes of this exercise, bad words are: clear, water, tires.

// Create an application that:

// Takes input from a user using a simple text input field.
// Splits the string on spaces
// Loops through  the array looking for bad words in the array
// Adds 1 to a tally count when a bad word is found
// Outputs to the document
// If any bad words were found (found / not found)
// How many bad words, in total, were found
// Clears out the text field so the user can input a new string
 

// For example, if the user input "clear water is clear", there are 3 bad words in the string.

//making a variable for all of the input and output fields
var inputBox = document.getElementById("inputText");
var findMsg = document.getElementById("findMsg");
var tallyMsg = document.getElementById("tallyMsg");


function badwordFunction(){
    
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
        tallyMsg.innerHTML = "Tally: " + tally;

}