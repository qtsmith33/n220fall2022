//Quinton Smith
//9/21/2022
//N220 Fall 2022

//setup canvas, establish a as variable.
let a;
function setup() {
    createCanvas(800, 800)
    a=0
}

//draw tv width
function tv(x,y,tvheight,tvwidth,scheight,scwidth,antenaLength){
    this.tvheight=tvheight;
    this.tvwidth=tvwidth;
    this.x=x;
    this.y=y;
    this.scheigt=scheight;
    this.scwith=scwidth;
    this.antenaLength=antenalength;
}
function drawtv(x,y,tvheight,tvwidth,scheight,scwidth,antenalength){
rect(x-scheight/2, y-tvwidth/2, tvwidth);
rect(x-scheight/2, y-scwidth/2. scwidth);
ellipse(x, y, scwidth-10, scheight-10);
line(x-tvwidth/2. y-tvwidth/2, x-(tvwidth-scwidth), y-(tvwidth-antenalength));
}

function draw(){
    tv1 =new tv(100,100, 50, 50, 60, 60, 20);
}