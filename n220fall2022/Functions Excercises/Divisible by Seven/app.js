// Quinton Smith
// 11/3/2022
// N220-24603 Fall 2022

// Distance Calculator
const inputNumber = document.getElementById("inputNumber");
const sevenMsg = document.getElementById("sevenMsg");

//Make the number input a variable "inputVal" to use for 7 check
function numberInput(){
    //name takes the actual text from the input "nameInput" and stores it as a string.
    let inputVal = inputNumber.value;
    sevenCheck(inputVal);
}

function sevenCheck(inputVal){
    if(inputVal%7== 0){
        console.log("Input is divisible by 7")
    sevenMsg.innerHTML= "Input is divisible by 7"
    } else{console.log("Input is NOT divisble by 7")
    sevenMsg.innerHTML= "Input is NOT divisible by 7"
}
}