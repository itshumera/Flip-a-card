document.addEventListener("DOMContentLoaded", ()=>{

const cardArray = [
  {
    name : 'daichi',
    img: 'Images/1.png'
  },
  {
    name : 'daichi',
    img: 'Images/1.png'
  },
  {
    name: 'suga',
    img: 'Images/2.png'
  },
  {
    name: 'suga',
    img: 'Images/2.png'
  },
  {
    name: 'asahi',
    img: 'Images/3.png'
  },
  {
    name: 'asahi',
    img: 'Images/3.png'
  },
  {
    name: 'yu',
    img: 'Images/4.png'
  },
  {
    name: 'yu',
    img: 'Images/4.png'
  },
  {
    name: 'tanaka',
    img: 'Images/5.png'
  },
  {
    name: 'tanaka',
    img: 'Images/5.png'
  },
  {
    name: 'tobio',
    img: 'Images/6.png'
  },
  {
    name: 'tobio',
    img: 'Images/6.png'
  },
  {
    name: 'hinata',
    img: 'Images/7.png'
  },
  {
    name: 'hinata',
    img: 'Images/7.png'
  },
  {
    name: 'tsukki',
    img: 'Images/8.png'
  },
  {
    name: 'tsukki',
    img: 'Images/8.png'
  },
  {
    name: 'yamaguchi',
    img: 'Images/9.png'
  },
  {
    name: 'yamaguchi',
    img: 'Images/9.png'
  },
  {
    name: 'kuroo',
    img: 'Images/10.png'
  },
  {
    name: 'kuroo',
    img: 'Images/10.png'
  },
  {
    name: 'kenma',
    img: 'Images/11.png'
  },
  {
    name: 'kenma',
    img: 'Images/11.png'
  },
  {
    name: 'lev',
    img: 'Images/12.png'
  },
  {
    name: 'lev',
    img: 'Images/12.png'
  }
]

cardArray.sort(() => 0.5 - Math.random());

var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

const box = document.querySelector('.box');
const result = document.querySelector('#result');

function createBoard(){
  for(i = 0; i < cardArray.length; i++){
    var card = document.createElement('img');
    card.setAttribute('src', 'Images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    box.appendChild(card);
  }
}

//check for match
function checkForMatch(){
  var cards = document.querySelectorAll('img');
  const optionOne = cardsChosenId[0];
  const optionTwo = cardsChosenId[1];
  if(cardsChosen[0] === cardsChosen[1]){
    cards[optionOne].style.visibility = 'hidden';
    cards[optionTwo].style.visibility = 'hidden';
    cards[optionOne].removeEventListener('click', flipCard);
    cards[optionTwo].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  }
  else{
    cards[optionOne].setAttribute('src', 'Images/blank.png');
    cards[optionTwo].setAttribute('src', 'Images/blank.png');
  }
  cardsChosen = [];
  cardsChosenId = [];
  result.textContent = cardsWon.length;
  if(cardsWon.length == cardArray.length/2){
    result.textContent = "Congratulations! You have found them all!";
  }
}

//flip your card
function flipCard(){
  var cardId = this.getAttribute('data-id');
  cardsChosenId.push(cardId);
  cardsChosen.push(cardArray[cardId].name);
  this.setAttribute('src', cardArray[cardId].img);
  if(cardsChosen.length == 2){
    setTimeout(checkForMatch, 500);
  }
}

createBoard();

});
