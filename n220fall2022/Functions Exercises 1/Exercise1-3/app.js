//Quinton Smith
//9/15/2022
//N220 Fall 2022

//setup canvas
function setup() {
    createCanvas(800,800);

}

function draw() {
    polarPoint();
}

//functions
function polarPoint(r){
    x=r*Math.sin(mouseX);
    y=r*Math.cos(mouseY);
}

res=polarPoint();
function draw(){
    circle(res.x, res.y, 10);
}