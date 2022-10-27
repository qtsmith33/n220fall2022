// Quinton Smith
// 10/26/2022
// N220-24603 Fall 2022

// Distance Calculator
const x1Input = document.getElementById("x1Input");
const y1Input = document.getElementById("y1Input");
const x2Input = document.getElementById("x2Input");
const y2Input = document.getElementById("y2Input");
const distanceShow = document.getElementById("DistanceShow")

function distCalc(){
    //name takes the actual text from the input "nameInput" and stores it as a string.
    let x1 = x1Input.value;
    let y1 = y1Input.value;
    let x2 = x2Input.value;
    let y2 = y2Input.value;
    
    let xDiff = Math.abs(x2 - x1);
    let yDiff = Math.abs(y2 - y1);

    let Distance= Math.sqrt( xDiff*xDiff + yDiff*yDiff);

    console.log(Distance);
    //Takes the distance and puts it into our div "distanceShow"
    distanceShow.innerHTML = Distance;
}
//Create a page with four inputs, labeled x1, y1, x2, and Y2. Add one button labeled "calculate distance".

//When the button is pressed, calculate the distance using the equation d = Math.sqrt( xDiff*xDiff + yDiff*yDiff); 

//(xDiff and yDiff are the differences between the x points and y points, respectively)

//The distance calculation MUST take place in a function that returns the value of the distance.
