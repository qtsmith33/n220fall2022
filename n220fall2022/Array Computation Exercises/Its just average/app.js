//Quinton Smith
//11/10/2022
//N220 Fall 2022

// Its just average

// Create an application that:

// Takes in a list of comma-separated numbers from the user
// Splits that list into an array of numbers
// Converts the string version of the numbers into number versions
// Loops through the array and sums up the values
// Calculates the average of the array
// Displays to the user
// The average
// The sum
// Removes the text from the input so the user can type in new numbers

//making a variable for all of the input and output fields
var inputBox = document.getElementById("inputText");
var averageBox = document.getElementById("averageMsg");
var sumBox = document.getElementById("sumMsg");

//Function that takes the input
function averageFunction(){
    let inputText = inputBox.value;
    //Then seperates it into an array where we encounter ","
    let inputArray = inputText.split(",");
    //establishes variables
    let sum = 0;
    let average = 0;
    let arrayLength = inputArray.length;
    //Loop that goes through each element of the array
    for(let i=0; i<inputArray.length; i++){
        //turns into number and adds it to variable established above, set to 0 previously
        let inputNum = parseFloat(inputArray[i]);
        sum += inputNum;
    }
    //Uses the sum we found in the for loop and the arraylength (of array used) and changes value of average (a variable established above)
    average = sum/arrayLength;

    // console.log(sum);
    // console.log(average);
    
    //Lets us see the values on screen by changing div text
    sumBox.innerHTML = "sum: " + sum;
    averageBox.innerHTML = "average: " + average;
}