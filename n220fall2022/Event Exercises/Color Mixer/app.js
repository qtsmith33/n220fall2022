//Quinton Smith
//11/17/2022
//N220 Fall 2022

// This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, 
// the div will change to new colors. 
// The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div 
// to a purple color.

// 9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
// 1 div that will change colors to the rgb color calculated

// 1 div that shows the current calculated rgb color

// You must use attributes on the buttons for the values to change the colors by.

let redValue = 0;
let greenValue = 0;
let blueValue = 0;

const divColor = document.getElementById("colorBlock");
const displayColorValue = document.getElementById("displayColor");

function handleClick(event){
redValue+= Number(event.target.getAttribute("dataRed"));
greenValue+= Number(event.target.getAttribute("dataGreen"));
blueValue+= Number(event.target.getAttribute("dataBlue"));
divColor.style.backgroundColor="rgb("+redValue+","+greenValue+","+blueValue+")";
displayColorValue.innerHTML="Color: "+divColor.style.backgroundColor;
};