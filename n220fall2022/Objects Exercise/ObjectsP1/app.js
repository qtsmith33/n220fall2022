//Quinton Smith
//9/22/2022
//N220 Fall 2022


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  triangle(100,100,125,75,150,100)
  fill("#FF0000");
  rect(100,100,50,200)
  fill("#000000");
  
  
  line(aou.x, aou.y, mouseX, mouseY);
}

function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
  return(
   Math.sqrt(dx*dx + dy*dy));
}