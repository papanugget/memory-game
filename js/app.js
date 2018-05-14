/*
 * Create a list that holds all of your cards ✔️
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

/*
 * Display the cards on the page ✔️
 *   - shuffle the list of cards using the provided "shuffle" method below ✔️
 *   - loop through each card and create its HTML  ✔️
 *   - add each card's HTML to the page ✔️
 */

//Globals
//select deck element
const deck = document.querySelector('.deck');
//card elements
const cards = document.querySelectorAll('.card');
//open cardList array
const openCardList = [];
//matched card list arr
const matchCardList = [];

//Event Handlers
//add event listener to deck
deck.addEventListener('click', showCard);

//functions
//build HTML for cards from shuffled arr
function buildCards(){
    //loop thru shuffled iconArr
    for(let i = 0; i < iconArr.length; i++){
        //clear icons
        cards[i].innerHTML = '';
        //set card icons with each from shuffled iconArr
        cards[i].innerHTML = `<i class="${iconArr[i]}"></i>`;
        //check for any open 
        if(cards[i].classList === "open" || "match" || 'show'){
            //clear open cards
            cards[i].classList.remove('open');
            cards[i].classList.remove('match');
            cards[i].classList.remove('show');
        }
    }
}       
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
/*
    * set up the event listener for a card. If a card is clicked: ✔️
    *  - display the card's symbol (put this functionality in another function that you call from this one) ✔️
    *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) ✔️
    *  - if the list already has another card, check to see if the two cards match
    *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
    *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
    *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
    *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
*/
//shows card
function showCard(card){
    //if else logic to register clicks on cards only
    if(card.target.classList == 'card'){
        iconToggle(card);
    }
    //add to cardList arr
    openCardList(card);
}
//toggles icon visibility
function iconToggle(card){
    // console.log('icontoggle clicked');
    card.target.className = 'card show open';
    // card.target.classList.add('show');
    // card.target.classList.add('open');
}
//add opened card to cardList arr
function cardList(card){
    openCardList.push(card.target);
    //loop thru cardList arr 
    for(let i = 0; i < cardList.length -1; i++){
        //check if card entering arr has any matches
        if(card.innerHTML != openCardList[i].innerHTML){
            setTimeout(hideCard(card), 2000);
            openCardList.splice(1, [i]);
        } else {

        }
    }
}
//hide card
function hideCard(card){
    card.target.className = 'card show open';
    // card.target.classList.remove('open');
}
//match card
function matchCard(card){
    card.target.className = 'card show open match';
}
// //change CSS class for each card click
// function showIcon(card){
//     // console.log(card.target.classList);
//     //if else logic to account for card clicks only
//     if(card.target.classList == "card"){
//         //show icon function when clicked
//         showCard(card);
//         // console.log(card.target);
//         //calls openCardList func
//         openCardList(card.target);
//     }
// };
// const cardList = [];
// //add open card to list
// function openCardList(card){
//     cardList.push(card);
//     //loop thru cardlist array - 1 to account for first entry
//     for(let i = 0; i < cardList.length -1; i++){
//         //check if card entering array matches any in array
//         if(card.innerHTML != cardList[i].innerHTML){
//             console.log('hide the card');
//             hideCard(card, );
//         } else {
//             console.log('found the card');
//             // showCard(card);
//             showCard(card);
//         }
//     } 
//     return cardList;
// };

// function showCard(card){
//         card.target.classList.add('open');
//         card.target.classList.add('show');
//         // console.log(card.target);
//         //calls openCardList func
//         openCardList(card.target);
// }

// function hideCard(card){
//     // console.log('hide the card');
//     // for(let i = 0; i < cardList.length; i++){
//     //     if(card.classList === "open" && "show"){
//     //         card.target.classList.remove('open');
//     //         card.target.classList.remove('show');
//     //     }
//     // } 
//     card.classList.remove('open');
//     card.classList.remove('show');
// }

// //shuffle hardcoded cardArr
shuffle(iconArr);
//randomize card icon positions on page load
buildCards();