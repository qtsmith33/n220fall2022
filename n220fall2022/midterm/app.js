let myDiv = document.getElementById("myDiv");
let count = 10;

function doThing() {
count -= 1;
myDiv.innerHTML = count;

if (count <1) {
    myDiv.innerHTML = "liftoff";
}
}