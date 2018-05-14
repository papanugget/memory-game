/*
 * Create a list that holds all of your cards ✔️
 */
const iconArr = ["fa fa-bicycle", "fa fa-bolt", "fa fa-bomb", "fa fa-paper-plane-o", "fa fa-bomb", "fa fa-bolt", "fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-bicycle", "fa fa-cube","fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-leaf", "fa fa-anchor"]; 
//global vars
let openCardList = [];
let matchCardList = [];
const cards = document.querySelectorAll('.card');
const moves = document.querySelector('.moves');
const starts = document.querySelector('.stars');
const reset = document.querySelector('.restart');
/*
 * Display the cards on the page ✔️
 *   - shuffle the list of cards using the provided "shuffle" method below ✔️
 *   - loop through each card and create its HTML  ✔️
 *   - add each card's HTML to the page ✔️
 */

init();
function init(){
    for(let i = 0; i < cards.length; i++){
        //add click listener to cards
        cards[i].addEventListener('click', cardClick)
    }
     resetCards();
}
function cardClick(card){
    // console.log('card clicked');
    toggleIcon(card);
    //add clicked card to openCarList arr
    openCards(card);
}
function toggleIcon(card){
    if(card.target.classList == 'card'){
        card.target.classList.toggle('show');
        card.target.classList.toggle('open');
        card.target.classList.toggle('locked');
        
    }
    // console.log(card.target);
}
function openCards(card){
    //push cards into openCardList arr
    openCardList.push(card.target);
    //if else logic to handle matched or unmatched
    if(openCardList.length === 2){
        if(openCardList[0].innerHTML === openCardList[1].innerHTML){
            matchCards();
        } else {
            noMatch();
        }
    }
}
function matchCards(){
    openCardList[0].classList.add('match', 'locked');
    openCardList[1].classList.add('match', 'locked');
    openCardList[0].classList.remove('show', 'open');
    openCardList[1].classList.remove('show', 'open');
    matchCardList.push(openCardList[0]);
    lockCard();
    clearArr(openCardList);
}
function noMatch(){
    openCardList[0].classList.add('nomatch');
    openCardList[1].classList.add('nomatch');
    lockCard();
    setTimeout(function(){
        openCardList[0].classList.remove('show', 'open', 'nomatch');
        openCardList[1].classList.remove('show', 'open', 'nomatch');
        unlockCard();
        clearArr(openCardList);
    },1200);
}
function lockCard(){
    openCardList.forEach((card) => {
        card.classList.add('locked');
    });
}
function unlockCard(){
    openCardList.forEach((card) => {
        card.classList.remove('locked');
    });
}
function clearArr(arr){
    arr.length = 0;
    return arr;
}
function resetCards(){
    shuffle(iconArr);
    for(let i = 0; i < iconArr.length; i++){
        //remove any open / show / match classes
        if(cards[i].classList === 'open' || 'match' || 'show'){
            cards[i].classList.remove('open');
            cards[i].classList.remove('match');
            cards[i].classList.remove('show');
        }
        //clear cards current icons
        cards[i].innerHTML = '';
        //set card icons with shuffled arr
        cards[i].innerHTML = `<i class="${iconArr[i]}"></i>`;
    }
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