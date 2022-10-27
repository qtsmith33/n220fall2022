// Quinton Smith
// 10/26/2022
// N220-24603 Fall 2022

let fortuneCookie = document.getElementsByClassName("");
let inp=document.getElementById("input");
let fortuneArray = ["Try Again", "Never lucky rubber ducky", "You're the best, don't change"]
random = 3;
function fortuneTime(){
    console.log("Checking Button");
    let r=Math.floor(Math.random()*random);
    dvFortune.innerHTML = fortuneArray[r]
}
function newFortune(){
    fortuneArray.push(inp.value)
    random+=1;
    inp.value="";
}