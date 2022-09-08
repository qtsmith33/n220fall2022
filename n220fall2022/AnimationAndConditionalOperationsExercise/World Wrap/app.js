//Quinton Smith
//9/8/2022
//N220 Fall 2022

//establish variable a
let a;

//make canvas and set a to zero
function setup() {
    createCanvas(800, 600);
    a=0;
}

//draws a circle on left side of screen
function draw (){
    circle(a*5, 300, 25);
    fill('blue');
    a++;
    if(a=160){
        a=0;
    } else {
        a=a;
    }
}