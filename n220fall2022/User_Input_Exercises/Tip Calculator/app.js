// Quinton Smith
// 10/27/2022
// N220-24603 Fall 2022

// Tip calculator

const billInput = document.getElementById("billInput");
// Make a page with one input and one button (Seeing a trend?). 
function tipCalc(){
    //name takes the actual text from the input "nameInput" and stores it as a string.
    let bill = billInput.value;
    let tip = bill*.2;

    let totalBill= parseFloat(bill) + parseFloat(tip);

    //"Hello {Name}" to the developer console, with {Name} being the value the user put into the input field.
    console.log ("bill: " + bill );
    console.log ("tip: " + tip );
    console.log ("total: " + totalBill );
}

//When the button is clicked (assuming the value typed into the input is numerical), calculate both the tip and the full value of the bill to be paid. Output both to the console, formatted as such:

//"Tip: $X. Total: $X" 