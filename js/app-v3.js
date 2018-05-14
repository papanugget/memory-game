/*
 * Create a list that holds all of your cards ✔️
 */
const iconArr = ["fa fa-bicycle", "fa fa-bolt", "fa fa-bomb", "fa fa-paper-plane-o", "fa fa-bomb", "fa fa-bolt", "fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-bicycle", "fa fa-cube","fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-leaf", "fa fa-anchor"]; 
//global vars
let openCardList = [];
let matchCardList = [];
let clicks = 0;
const deck = document.querySelector('.deck');
const cards = document.querySelectorAll('.card');
const moves = document.querySelectorAll('.moves');
const score = document.querySelector('.stars');
const stars = document.querySelectorAll('.fa-star');
const reset = document.querySelector('.restart');
const modal = document.querySelector('#victory');
const restart = document.querySelectorAll('.restart');
const youWin = new Audio('../snd/yaywav.mp3');
// const close = document.querySelector('.close');
/*
 * Display the cards on the page ✔️
 *   - shuffle the list of cards using the provided "shuffle" method below ✔️
 *   - loop through each card and create its HTML  ✔️
 *   - add each card's HTML to the page ✔️
 */
//one event listener for all cards
deck.addEventListener('click', cardClick);
//event listener for restart buttons
for(let i = 0; i < restart.length; i++){
    restart[i].addEventListener('click', resetGame);
}
//close modal button
// close.addEventListener('click', closeModal);
//functions
function cardClick(card){
    if(card.target.className === 'card'){
            showIcon(card);
            openCard(card);
    }
}
function showIcon(card){
    // card.target.classList.add('show');
    // card.target.classList.add('open');
    // card.target.classList.add('locked');
    card.target.className = 'card show open locked';
}
function openCard(card){
    //push clicked card into opencardlist array
    openCardList.push(card.target);
    //logic to check amount of elements in opencardlist and checks icons
    if(openCardList.length === 2){
        clickCounter();
        openCardList[0].innerHTML === openCardList[1].innerHTML ? matchCard(openCardList) : noMatch(openCardList);
    }
}
function clickCounter(){
    //add 1 for each click
    clicks++;
    //updates all move counter elements
    for(let i = 0; i < moves.length; i++){
        moves[i].innerHTML = clicks;
    }
    // console.log(clicks);
    //rate performance based on number of completed moves
    if(clicks > 8 && clicks < 15) {
        for(let i = 0; i < 3; i++){
            if(i > 1){
                score.children[i].style.display = 'none';
            }
        }
    } else if(clicks > 15){
        for(let i = 0; i < 3; i++){
            if(i > 0) {
               score.children[i].style.display = 'none';
            }
        }
    }
}
function matchCard(arr){      
    //lock matched cards in matched state
    arr[0].className = 'card match locked';
    arr[1].className = 'card match locked';
    //push matched cards to match list
    matchCardList.push(arr[0]);
    //clear opencardlist 
    clearArr(arr);
    if(matchCardList.length === 8){
        gameVictory();
    }
}
function noMatch(arr){
    //if 2 cards don't match prevent further clicks
    disableClick();
    //highlight wrong cards with red background
    arr[0].className = 'card show open nomatch';
    arr[1].className = 'card show open nomatch';
    //needs timeout function otherwise 2nd card clicked never shows icon :/
    setTimeout(() => {
        //reset clicked cards to closed   
        arr[0].className = 'card';
        arr[1].className = 'card';
        //reenable click
        enableClick();
        //clear array for more input
        clearArr(arr); 
    }, 1200);   
}
function disableClick(){
    //lock every card
    cards.forEach((card) => {
        card.classList.add('locked');
    });
}
function enableClick(){
    //reenable clicks
    cards.forEach((card) => {
        card.classList.remove('locked');
        //check matchcardlist arr elements vs cards on play board
        for(let i = 0; i < matchCardList; i++){
            if(card.innerHTML === matchCardList[i]){
                //relocks already matched cards
                card.classList.add('locked');
            }
        }
    });
}
function gameVictory(){
    modal.style.display = 'block'; 
    //show star performance
    for(let i = 0; i < 3; i++){
        let starsList = document.querySelector('.starsList');
        if(score.children[i].style.display != "none"){
            starsList.innerHTML += '<i class="fa fa-star"></i>';
        }
    }
    youWin.play()
        .then(() => {
            console.log('played');
        })
        .catch((error) => {
            console.log(error);
        });
}
function closeModal(){
    modal.style.display = 'none';
    resetGame();
}
function resetGame(){
    //clear move counter
    for(let i = 0; i < moves.length; i++){
        moves[i].innerHTML = 0;
    }
    clicks = 0;
    //show stars
    for(let i = 0; i < 3; i++){
        score.children[i].style.display = '';
    }
    //clear arrays
    clearArr(openCardList);
    clearArr(matchCardList);
    //clear modal
    modal.style.display = 'none';
    shuffle(iconArr);
    for(let i = 0; i < iconArr.length; i++){
        //check for card classes other than card
        if(cards[i].classList === 'open' || 'show' || 'match' || 'locked'){
            cards[i].classList.remove('open');
            cards[i].classList.remove('show');
            cards[i].classList.remove('match');
            cards[i].classList.remove('locked');
        }
        //clear current card icons
        cards[i].innerHTML = '';
        //put shuffled icons into cards
        cards[i].innerHTML = `<i class='${iconArr[i]}'></i>`;
    }
}
function clearArr(arr){
    arr.length = 0;
    return arr;
}
/*
    * set up the event listener for a card. If a card is clicked: ✔️
    *  - display the card's symbol (put this functionality in another function that you call from this one) ✔️
    *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) ✔️
    *  - if the list already has another card, check to see if the two cards match ✔️
    *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one) ✔️
    *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)✔️
    *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one) ✔️
    *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one) ✔️
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
document.onload = resetGame();