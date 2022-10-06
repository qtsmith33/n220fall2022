//Quinton Smith
//9/29/2022
//N220 Fall 2022

//Write the markup and JavaScript to place a square div on the page (100px x 100px), with a blue background.
//Using onmouseover and onmouseout (instead of "onclick"), change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves.

//making square div
let squareDiv = document.getElementById("box");
squareDiv.style.width = "100px";
squareDiv.style.height = "100px";
//set background to blue
squareDiv.style.backgroundColor = "#0000FF";

//change background to black on mouseover
function backgroundMouseOver(){
squareDiv.style.backgroundColor = "#000000";
}

//Returns color to blue when not moused over
function noMouse(){
squareDiv.style.backgroundAttachmentColor = "#0000FF"
};