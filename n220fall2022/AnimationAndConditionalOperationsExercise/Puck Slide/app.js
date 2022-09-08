//Quinton Smith
//9/8/2022
//N220 Fall 2022

function setup() {
    createCanvas(400, 300)
}

//draws a circle at mouse pointer
function draw (){
    circle(mouseX, mouseY, 25)
//Below we check which half of the screen the mouse is on, 200 is middle so less(left) is blue, more (right) red.
    if (mouseX<=200) {
        fill('blue')
    } else{
        fill('red')
    }
}