/*
 * Create a list that holds all of your cards
 */

// let cards = [];
// //select card elements
// cards = document.querySelectorAll('.card')
//init empty array for i class values

//loop thru cards and select i class values and push into empty array

    // console.log(cardItems);

//would it be easier to just have a hard coded array to hold the i class values?
const cardArr = ["fa fa-bicycle", "fa fa-bolt", "fa fa-bomb", "fa fa-paper-plane-o", "fa fa-bomb", "fa fa-bolt", "fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-bicycle", "fa fa-cube", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-leaf", "fa fa-anchor"];

function buildCards(){
    //clear icons by selecting cards
    //init empty array to hold card elements
    let cards = [];
    //select card elements
    cards = document.querySelectorAll('.card');
    //loop thru cards and remove icons
    for(let i = 0; i < cards.length; i++){
        cards[i].innerHTML = '';
        // //shuffle hardcoded cardArr
        shuffle(cardArr);
        //loop thru shuffed card array
        for(let j = 0; j < cardArr.length; j++){
            //each card will have new card icon
            //build html using template literals
            //insert them into each card element
            cards[i].innerHTML = `<i class="${cardArr[j]}"></i>`;
        }
        console.table(cards);
    }
    
    // console.log(cardArr);
    //loop thru shuffled array
    // cardArr.forEach((icon) => {
    //     // console.log(icon);
    //     output = `<i class="${icon}></i>"`
    //     for(let j = 0; j < cards.length; j++){
    //         cards[j].innerHTML += output;
    //     }
    // });
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

buildCards();
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
