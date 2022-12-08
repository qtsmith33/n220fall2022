//Quinton Smith
//12/06/2022
//N220 Fall 2022



// Concentration
//Events-Flashcard exercise?

// Create a version of the 'classic' game of memory (aka concentration). There should be a 4 x 4 grid of cards laid out face-down in front of the user. When clicked, reveal the face of a card. When a second card is tapped, reveal the face of that card as well. If the two cards match, remove them from the game. If they don’t, return them to face-down and allow the user to choose two more.

// Requirements

// A 4x4 grid of facedown cards

// Reveal the value of a facedown card on click

// If two revealed cards match, remove them

// If two revealed cards do not match, return them to face down

// A ‘replay game’ option when the game is over

// Use setTimeout to keep both face up cards visible for two seconds before hiding / removing them
let flipCounter = 0;
let card1 = "";
let card2 = "";
let resetinProgress = false;

function handleClick(event) {
    
    if (event.target.dataset.flip=="False" && resetinProgress == false){
        console.log(event.target);
        event.target.dataset.flip= "True";
        let response = event.target.getAttribute("dataValue");
       
        event.target.innerHTML=response;
        
        // console.log("Card is flipped");
        if (flipCounter == 0 ){
        card1 = event.target;
        flipCounter++;
        } else if (flipCounter == 1 ){
        card2 = event.target;
        flipCounter++;
        console.log(card1.getAttribute("dataValue") +card2.getAttribute("dataValue"));

            if(card1.getAttribute("dataValue")==card2.getAttribute("dataValue")){
                console.log("match found");
                card1.style.backgroundColor = "green";
                card2.style.backgroundColor = "green";
                flipCounter = 0;
            } else {
                console.log("No match");
                setTimeout( resetGame, 2000);
                resetinProgress = true;
            }


        }
        
        

    }


};

function resetGame(){
    resetinProgress = false;
    console.log("game reset");
    flipCounter = 0;
    card1.dataset.flip="False";
    card1.innerHTML="";
    card2.dataset.flip="False";
    card2.innerHTML="";


};
