//Quinton Smith
//9/8/2022
//N220 Fall 2022

function setup() {
    createCanvas(400, 300)
}

//draws a circle at mouse pointer
function draw (){
    circle(mouseX, mouseY, 25)
    if (mouseX<=200) {
        fill('blue')
    } else{
        fill('red')
    }
}