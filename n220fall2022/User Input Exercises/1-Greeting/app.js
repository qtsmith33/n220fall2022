// Quinton Smith
// 10/27/2022
// N220-24603 Fall 2022

//Greeter

//Makes a variable that DOESN'T change from input and the styling of the input tag.
const nameInput = document.getElementById("nameInput");

function Greeting(){
    //name takes the actual text from the input "nameInput" and stores it as a string.
    let name = nameInput.value;
    //"Hello {Name}" to the developer console, with {Name} being the value the user put into the input field.
    console.log ("Hello "+ name);
}



