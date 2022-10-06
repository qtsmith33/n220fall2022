//Quinton Smith
//9/29/2022
//N220 Fall 2022

//Make it so that when the div its clicked, it increases its size by 10% every time.
//Hints:
//Make a variable to store the height and with of the object
//to set the height and width, set to varName + "px"
//10% is .1 bigger,or 1.1 * the original sizePut a div on the page. 
//Set up variables to store height and weight
var squareHeight = 100;
var squareWidth = 100;

let dvSquare = document.getElementById("square");

//make the square blue
dvSquare.style.backgroundColor = "#0000FF";

//set height and width
dvSquare.style.width = squareWidth + "px";
dvSquare.style.height = squareHeight + "px";

//increases in size with each click - function
function clickGrow(){
squareHeight = squareHeight*1.1
squareWidth = squareWidth*1.1
dvSquare.style.width = squareWidth + "px";
dvSquare.style.height = squareHeight + "px";
}