function setup() {
    createCanvas(800,600);
}

function drawFace(x,y) {
    
    line(x, y, x+10, y+10)
    circle(x + 10, y + 10, 5);
    circle(x + 30, y + 10, 5);
    circle(x + 15, y + 30, 5);
}

function drawFace(x,y) {
background(0)
//invoke the function
drawFace(400, 400);
//top left
drawFace(10, 10);
//top right
drawFace(400, 10);
//where the mouse is
drawFace(mouseX, mouseY);
}

Reflect()