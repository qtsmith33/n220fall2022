//Quinton Smith
//9/15/2022
//N220 Fall 2022

//setup canvas, establish x and y as variables.
let x;
let y;
function setup() {
    createCanvas(400, 400)
}

//creates a function named redRemover
function redRemover (color){
    //sets red value to zero
    color.setRed(0);
    
    //tests
    noRed = redRemover(color(160,190,140));

    fill(noRed);
}

    //draw circle
    function draw(){
        //tests
        noRed = redRemover(color(160,190,140));

        fill(noRed);
        circle(40,40,40);
    
}
