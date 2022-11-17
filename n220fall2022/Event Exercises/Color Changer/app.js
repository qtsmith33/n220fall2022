//Quinton Smith
//11/17/2022
//N220 Fall 2022

// Color Changer
// Using only one event handler, write event listeners to respond to a click on each element. 
// Each element should change to a different color: one red, one green, and one blue. Use a data attribute on the elements to store the color to be changed to.

function handleClick(event) {
    let response = event.target.getAttribute("dataColor");
    event.target.style.backgroundColor=response;

};




