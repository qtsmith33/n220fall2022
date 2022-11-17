//Quinton Smith
//11/17/2022
//N220 Fall 2022

// An application with 3 buttons that ask questions. For instance, they might ask "What is the capital of Indiana?". 
// Each button should have a data-answer attribute that lists the answer.

// When a button is clicked, display the answer to the button's question in a div. 
// Use only one function, and that function must make use of the button's data-attribute.

function handleClick(event) {
    let response = event.target.getAttribute("dataAnswer");
    event.target.innerHTML=response;

};
