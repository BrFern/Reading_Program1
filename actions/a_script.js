const cards = document.querySelectorAll(".card");

//Adding the flipCard function
function flipCard(e) {
    // console.log(e.target); //Recorded clicked card to the console
    let clickedCard = e.target; //Getting user clicked card
    clickedCard.classList.add("flip");
}

cards.forEach(card => { //Adding click event to all of the cards
    card.addEventListener("click" , flipCard);
});


