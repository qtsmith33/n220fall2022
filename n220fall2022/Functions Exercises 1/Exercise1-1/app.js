//Quinton Smith
//9/15/2022
//N220 Fall 2022

//setup canvas, establish x and y as variables.
let x;
let y;
function setup() {
    createCanvas(400, 400)
}

//function draw (x,y){
//    rect(30+x,30+y,80,40)
//    fill('brown')
//}
function draw (){
    drawDrawer(10,10);

    drawDrawer(90,90);

    drawDrawer(120,120);
}


//creates a function named drawDrawer
function drawDrawer (x,y){
    //our composition
    //outer rectangle
    rect(30+x,30+y,80,40)
    fill('brown')
    //drawer
    rect(35+x,35+y,70,10)
    fill('black')
}
