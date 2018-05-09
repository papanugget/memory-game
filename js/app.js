/*
 * Create a list that holds all of your cards
 */

//would it be easier to just have a hard coded array to hold the i class values?
const iconArr = ["fa fa-bicycle", "fa fa-bolt", "fa fa-bomb", "fa fa-paper-plane-o", "fa fa-bomb", "fa fa-bolt", "fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-bicycle", "fa fa-cube", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-leaf", "fa fa-anchor"];

// function buildCards(){
//     //init empty array to hold card elements
//     let cards = [];
//     //select card elements
//     cards = document.querySelectorAll('.card');
//     //loop thru cards and remove icons
//     for(let i = 0; i < cards.length; i++){
//         //clear old icons
//         cards[i].innerHTML = '';
//         //loop thru shuffed card array
//         for(let j = 0; j < cardArr.length; j++){
            
//             // let icon = '';
//             // icon += `<i class="${cardArr[j]}"></i>`;
//             // cards[i].innerHTML += icon;
//             console.log(cardArr[j]);
//         }
//         // console.log(cards);
//     }
// }
function buildCards(){
    //select card class elements
    let cards = document.querySelectorAll('.card');
    // console.log(cards);
    //loop thru shuffled iconArr
    for(let i = 0; i < iconArr.length; i++){
        //clear icons
        cards[i].innerHTML = '';
        //set card icons with each from shuffled iconArr
        cards[i].innerHTML = `<i class="${iconArr[i]}"></i>`;
    }
    // console.log(cards);
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
// //shuffle hardcoded cardArr
shuffle(iconArr);
// console.log(cardArr);
//randomize card icon positions on page load
buildCards();

//select deck element
const deck = document.querySelector('.deck');
//add event listener to deck
deck.addEventListener('click', showIcon);

//change CSS class for each card click
function showIcon(card){
    // console.log(card.target.classList);
    //if else logic to account for card clicks only
    if(card.target.classList == "card"){
        //show icon when clicked
        card.target.classList.toggle('open');
        card.target.classList.toggle('show');
        openCardList(card.target.childNodes[0].classList.value);
    }
};
const cardList = [];
//add open card to list
function openCardList(card){
    cardList.push(card);
    return cardList;
};
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
