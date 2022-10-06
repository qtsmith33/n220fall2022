//Quinton Smith
//9/29/2022
//N220 Fall 2022

//Create a composition that, at minimum:
//Changes the css property of an asset on a mouse interaction (mouse over, mouse out, click)
//Modifies and changes the inner html of one element
//Accesses and modifies a variable outside of a local, function scope

//set up div
let myDiv = document.getElementById("Comp");
myDiv.style.width = "400px";
myDiv.style.height = "400px";
myDiv.style.backgroundColor = "#F0FFFF";

//variable to change
W = 100;

//message to use
msg = 'This will message will multiply. '

//Function to modifies an ouside variable "W"
function outside(){
    myDiv.innerHTML = msg;
    W += 50;
    myDiv.style.width = W + "px";
}

//Function to modifies inner html - repeats message "msg"
function inside(){ 
    myDiv.innerHTML = msg + msg;
    //unsure I did the line above (31) right so changing background too
    myDiv.style.backgroundColor = "7FFF00";
}