//Quinton Smith
//9/8/2022
//N220 Fall 2022

//establish variable a
let a;

//make canvas and set a to zero
function setup() {
    createCanvas(800, 600);
    a=1;
}

//draws a blue circle on left side of screen
function draw (){
    circle(a*5, 300, 25);
    fill('blue');
//increase a with increment, above its multiplied by 5 as thats how many pixels we move
    a++;
//if statement checks to see if a is at the far right edge of canvas, if it is moves to left again.
    if(a=160){
        a=1;
    } else {
        a=a;
    }
}