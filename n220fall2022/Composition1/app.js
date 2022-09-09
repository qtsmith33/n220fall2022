// Quinton Smith
// 8/31/2022
// N220-24603 Fall 2022

function setup() {
    createCanvas(800,600);
}

let myName = "Quinton";

myName += ", the student";

console.log(myName);

let bestPofessor = "Fortunately led by";

bestProfessor += ": Travis Faas";

console.log(bestProfessor);

let javaAdventure = "N220";

console.log(javaAdventure);

//Drawing a square at location (25, 25) with the sides of length 20
fill('red');
square(25, 25, 20);
describe('red square with black outline at position (25, 25) on canvas - the walls of house');

//Drawing a triangle for a roof
fill('black');
triangle(25, 25, 35, 15, 45, 25);
describe('black rectangle with black outline with top point at 25,0 and touching the corners of the box made above - a flat roof of house');

//Drawing a rectangle for a door
fill('brown')
rect(35, 35, 5, 10);
describe('brown rectangle with black outline at bottom half of square');