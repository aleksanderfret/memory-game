document.addEventListener('DOMContentLoaded', gameInitHandler);
// DOM elements
const deck = document.querySelector('#deck');
const moveControl = document.querySelector('.moves-number');
const timeControl = document.querySelector('.time');

// initial varaibles captured from DOM elements
const initiaLevel = 'easy';
const initialReverse = 'blue';
const initialObverse = 'flags';
const initialGameBackground = 'green';

// game settings objects
const settings = {
  obverseTypes: {
    animals: {
      id: 1,
      label: 'animals',
      directory: 'animals',
      collection: ['ant', 'bat', 'bee', 'bird', 'buffalo', 'butterfly', 'camel', 'camel-1', 'cat', 'caterpillar',
      'chipmunk', 'cow', 'crab', 'cricket', 'crocodile', 'dog', 'dolphin', 'dove', 'duck', 'eagle',
      'elephant', 'ewe', 'fish', 'fish-1', 'goat', 'hedgehog', 'hen', 'horse', 'ladybug', 'lizard',
      'monkey', 'mouse', 'octopus', 'ox', 'pig', 'rabbit', 'ram', 'rat', 'rhinoceros', 'scorpion',
      'shark', 'shrimp', 'snail', 'snake', 'spider', 'tiger', 'turkey', 'turtle', 'whale', 'whale-1'],
      license: 'Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
    },
    food: {
      id: 2,
      label: 'food',
      directory: 'food',
      collection: ['apple', 'baguette', 'banana', 'beans', 'biscuit', 'blueberries', 'boiled', 'bread', 'broccoli', 'cabbage',
      'candy', 'carrot', 'cauliflower', 'cheese', 'cherries', 'chili', 'chocolate', 'cookies', 'corn', 'cucumber',
      'doughnut', 'egg', 'garlic', 'grapes', 'hazelnut', 'honey', 'ice-cream', 'jam', 'lemon', 'milk',
      'onion', 'orange', 'pancakes', 'peach', 'pear', 'peas', 'pineapple', 'pizza', 'potatoes', 'radish',
      'raspberry', 'salad', 'salami', 'sausage', 'strawberry', 'toast', 'tomato', 'turkey', 'water', 'watermelon' ],
      license: 'Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
    },
    flags: {
      id: 3,
      label: 'flags',
      directory: 'flags',
      collection: ['algeria', 'argentina', 'australia', 'austria', 'belgium', 'brazil', 'cameroon', 'canada', 'chile', 'china',
        'colombia', 'cuba', 'czechia', 'denmark', 'egypt', 'finland', 'france', 'germany', 'greece', 'india',
        'ireland', 'israel', 'italy', 'jamaica', 'japan', 'mexico', 'morocco', 'netherlands', 'new-zealand', 'nigeria',
        'norway', 'paraguay', 'peru', 'philippines', 'poland', 'portugal', 'russia', 'saudi-arabia', 'senegal', 'south-africa',
        'spain', 'sweden', 'switzerland', 'tanzania', 'thailand', 'turkey', 'uganda', 'ukraine', 'united-kingdom', 'united-states'],
      license: 'Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
    },
    christmas: {
      id: 4,
      label: 'christmas',
      directory: 'christmas',
      collection: ['bauble', 'bauble-1', 'bauble-2', 'bauble-3', 'bauble-4', 'bauble-5', 'bauble-6', 'bauble-7', 'bauble-8', 'bauble-9',
      'bauble-10', 'bauble-11', 'bauble-12', 'bauble-13', 'baubles', 'bells', 'bells-1', 'bow', 'cabin-2', 'candle',
      'candle-1', 'candle-2', 'candle-4', 'candy', 'candy-1', 'candy-2', 'candy-3', 'candy-4', 'candy-cane', 'candy-cane-1', 'candy-canes',
      'christmas-card', 'christmas-card-1', 'christmas-sock', 'christmas-tree', 'christmas-wreath', 'christmas-wreath-1', 'garlands', 'gift', 'gift-1', 'gift-2',
      'gift-3', 'gingerbread-man', 'lights', 'mistletoe', 'mistletoe-1', 'reindeer', 'santa-claus', 'snow-globe-1', 'snowman'],
      license: 'Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
    }
  },
  reverseTypes: {
    blue: {
      id: 1,
      class: 'blue-reverse'
    },
    green: {
      id: 1,
      class: 'green-reverse'
    },
    red: {
      id: 1,
      class: 'red-reverse'
    },
    grey: {
      id: 1,
      class: 'grey-reverse'
    }
  },
  difficultyLevels: {
    easy: 8,
    normal: 18,
    hard: 32,
    expert: 50
  },
  gameBoard: {
    background: {
      blue: 'blue-board',
      red: 'red-board',
      green: 'green-board'
    }
  }
}

// set current variable based on initial variables
let level = initiaLevel;
let reverse = initialReverse;
let obverse = initialObverse;
let gameBackground = initialGameBackground;
let remainigPairs = settings.difficultyLevels[level];
let currentFirstCard = null;
let locked = false;
let clickCounter = 0;
let move = 0;

let startTimestamp;
let endTimeStamp;
let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let houndreth = 0;

const animationEnd = (function(element) {
  const animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (let animation in animations) {
    if (element.style[animation] !== undefined) {
      return animations[animation];
    }
  }
})(document.createElement('div'));

/**
 * @description Initiate game
 */
function gameInitHandler() {
  insertPageDate();
  confiureGame(gameBackground)
  placeCards(reverse, obverse, level);
}

/**
 * @description Insert year to the website footer
 */
function insertPageDate() {
  const pageDate = document.querySelector('#years');
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const startYear = 2018;
  if (year > startYear) {
    pageDate.textContent = startYear + '–' + year;
  } else {
    pageDate.textContent = startYear;
  }
}

function confiureGame(gameBackground) {
  const board = document.querySelector('body');
  const backgroundTypes = Object.keys(settings.gameBoard.background);

  for (backgroundType of backgroundTypes) {
    board.classList.remove(settings.gameBoard.background[backgroundType]);
  }
  board.classList.add(settings.gameBoard.background[gameBackground]);
}

/**
 * @description place cards on the board
 * @param {string} reverseType
 * @param {string} obverseType
 * @param {string} level
 */
function placeCards(reverseType, obverseType, Level) {
  const pairsOfCards = settings.difficultyLevels[level];
  const reversTypeClass = settings.reverseTypes[reverseType].class;
  const cardsDirectory = settings.obverseTypes[obverseType].directory;
  const cards = shuffle(settings.obverseTypes[obverseType].collection).splice(0, pairsOfCards);
  const doubleShuffleCards = shuffle(cards.concat(cards));
  const cardList = document.createDocumentFragment();

  for (card of doubleShuffleCards) {
    const newCard = createCard(card, reversTypeClass, cardsDirectory, level);
    cardList.appendChild(newCard);
  }
  deck.appendChild(cardList);
  deck.classList.add(level+'-level-deck');
}

/**
 * @description Create card
 * @param {string} card
 * @param {string} reversTypeClass
 * @param {string} directory
 * @param {string} level
 * @return {object}
 */
function createCard(card, reversTypeClass, directory, level) {
  const newCardPlace = document.createElement('li');
  newCardPlace.classList.add('card-place', level+'-level-place');

  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newReverse = document.createElement('div');
  newReverse.classList.add('reverse', reversTypeClass);
  newReverse.setAttribute('data-card', card);
  newReverse.setAttribute('data-reverse', true);

  const newObverse = document.createElement('div');
  newObverse.classList.add('reverse', 'obverse');
  newObverse.setAttribute('data-card', card);

  const obverseImage = document.createElement('img');
  obverseImage.classList.add('card-image');
  obverseImage.setAttribute('src', ('img/' + directory + '/' + card + '.svg'));

  //newReverse.appendChild(reversImage);
  newObverse.appendChild(obverseImage);
  newCard.appendChild(newReverse);
  newCard.appendChild(newObverse);
  newCardPlace.appendChild(newCard);

  return newCardPlace;
}

/**
 * @description Shuffle the list of cards
 * @param {array} array
 * @return {array}
 */
function shuffle(array) {
  // https://css-tricks.com/snippets/javascript/shuffle-array/
  return array.sort(function () {
    return 0.5 - Math.random()
  });
}

deck.addEventListener('click', function (event) {
  if (!locked && event.target.dataset.reverse && event.target !== currentFirstCard){
    if (clickCounter === 0) {
      startTimer();
    }
    clickCounter++;
    event.target.parentElement.classList.add('fliped-card');
    if (!currentFirstCard) {
      currentFirstCard = event.target;
    } else {
      move++;
      moveControl.textContent = move;
      locked = true;
      setTimeout(function(){
        checkPair(currentFirstCard, event.target);
      }, 1000);
    }
  }
});

function checkPair(firstCard, secondCard) {
  const firstCardData = firstCard.getAttribute('data-card');
  const secondCardData = secondCard.getAttribute('data-card');
  if (firstCardData !== secondCardData) {
    firstCard.parentElement.classList.remove('fliped-card');
    secondCard.parentElement.classList.remove('fliped-card');
  } else {
    firstCard.parentElement.classList.add('found-pair');
    secondCard.parentElement.classList.add('found-pair');
    remainigPairs--;
    if(remainigPairs === 0) {
      stopTimer();
      finishGame();
    }
  }
  currentFirstCard = null;
  locked = false;
}


function startTimer() {
  startTimestamp = Date.now();
  interval = setInterval(stopWatch, 10);
}

function stopTimer() {
  endTimeStamp = Date.now();
  clearInterval(interval);
}

function stopWatch () {
  houndreth++;
  if(houndreth >= 100) {
    houndreth = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        hours++;
      }
    }
  }
  const currentTime = ((hours < 10) ? "0" : "") + hours + ':'
                    + ((minutes < 10) ? "0" : "") + minutes + ':'
                    + ((seconds < 10) ? "0" : "") + seconds + ':'
                    + ((houndreth < 10) ? "0" : "") + houndreth;
  timeControl.textContent = currentTime;
}

function finishGame() {
  const gameTime = timeControl.textContent;
  const gameTimestampDiff = endTimeStamp - startTimestamp;
  const gameMoves = move;
  console.log('game over', gameTime, gameTimestampDiff, gameMoves);
}