document.addEventListener('DOMContentLoaded', gameInitHandler);
// DOM elements
const deck = document.querySelector('#deck');
const moveControl = document.querySelector('.moves-number');
const timeControl = document.querySelector('.time');
const endGameModal = document.querySelector('.end-modal');
const timeResult = document.querySelector('.time-result');
const movesResult = document.querySelector('.moves-result');
const closeModal = document.querySelector('.close-modal');

// initial varaibles captured from DOM elements
const initiaLevel = 'normal';
const initialReverse = 'grey';
const initialObverse = 'animals';
const initialGameBackground = 'green';

// game settings object
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

// Sets current variable with initial values
let level = initiaLevel;
let reverse = initialReverse;
let obverse = initialObverse;
let gameBackground = initialGameBackground;
// Stores the number of pairs remaining to be discovered
let remainigPairs = settings.difficultyLevels[level];
// Stores the first of the two fliped cards
let currentFirstCard = null;
// Lets block an event in some cases
let locked = false;
// Stores the number of clicks
let clickCounter = 0;
// Stores the number of moves
let move = 0;

// Variables needed to measure time
let startTimestamp;
let endTimeStamp;
let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let houndreth = 0;

// Checks which property has to be used when animation ends
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
 * @description Initiates the game
 */
function gameInitHandler() {
  insertPageDate();
  confiureGame(gameBackground)
  placeCards(reverse, obverse, level);
}

/**
 * @description Inserts current year to the website footer
 */
function insertPageDate() {
  const pageDate = document.querySelector('#years');
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const startYear = 2018;
  pageDate.textContent = (year > startYear) ? startYear + '–' + year : startYear;
}

/**
 * @description Sets the game background
 * @param {string} gameBackground
 */
function confiureGame(gameBackground) {
  const board = document.querySelector('body');
  const backgroundTypes = Object.keys(settings.gameBoard.background);
  // Removes existing background classes
  for (backgroundType of backgroundTypes) {
    board.classList.remove(settings.gameBoard.background[backgroundType]);
  }
  // Adds proper (current) background class
  board.classList.add(settings.gameBoard.background[gameBackground]);
}

/**
 * @description Puts the shuffled cards on the board
 * @param {string} reverseType
 * @param {string} obverseType
 * @param {string} level
 */
function placeCards(reverseType, obverseType, Level) {
  // Determines the number of pairs
  const pairsOfCards = settings.difficultyLevels[level];
  // Determines proper reverses and directory
  const reversTypeClass = settings.reverseTypes[reverseType].class;
  const cardsDirectory = settings.obverseTypes[obverseType].directory;
  // Randomly chooses cards and limits their number according to the game level
  const cards = shuffle(settings.obverseTypes[obverseType].collection).splice(0, pairsOfCards);
  // Doubles the cards to creates pairs and shuffle them
  const doubleShuffleCards = shuffle(cards.concat(cards));
  // Creates a new empty DocumentFragment
  const cardList = document.createDocumentFragment();

  // For each card creates new DOM element and adds it to the DocumentFragment (cardList)
  for (card of doubleShuffleCards) {
    const newCard = createCard(card, reversTypeClass, cardsDirectory, level);
    cardList.appendChild(newCard);
  }
  // Adds filled DocumentFragment (cardList) to the DOM
  deck.appendChild(cardList);

  // Gives list the appropriate class based on the game level
  deck.classList.add(level+'-level-deck');
}

/**
 * @description Creates card
 * @param {string} card
 * @param {string} reversTypeClass
 * @param {string} directory
 * @param {string} level
 * @return {object}
 */
function createCard(card, reversTypeClass, directory, level) {
  // Creates li - the card container
  const newCardPlace = document.createElement('li');
  newCardPlace.classList.add('card-place', level+'-level-place');

  // Creates div - the card
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  // Creates div - the reverse of the card
  const newReverse = document.createElement('div');
  newReverse.classList.add('reverse', reversTypeClass);
  newReverse.setAttribute('data-card', card);
  newReverse.setAttribute('data-reverse', true);

  // Creates div - the obverse of the card
  const newObverse = document.createElement('div');
  newObverse.classList.add('reverse', 'obverse');
  newObverse.setAttribute('data-card', card);

  // Creates img - the image of the card
  const obverseImage = document.createElement('img');
  obverseImage.classList.add('card-image');
  obverseImage.setAttribute('src', ('img/' + directory + '/' + card + '.svg'));

  // Folds the card from individual elements
  newObverse.appendChild(obverseImage);
  newCard.appendChild(newReverse);
  newCard.appendChild(newObverse);
  newCardPlace.appendChild(newCard);

  // returns card containeir
  return newCardPlace;
}

/**
 * @description Shuffles the list of cards
 * @param {array} array
 * @return {array}
 * Inspired by/Taken from: https://css-tricks.com/snippets/javascript/shuffle-array/
 */
function shuffle(array) {
  return array.sort(function () {
    return 0.5 - Math.random()
  });
}

// Flips card on clic event
deck.addEventListener('click', function flipCard(event) {
  if (!locked && event.target.dataset.reverse && event.target !== currentFirstCard){
    // Checks whether to enable the countdown of time
    if (clickCounter === 0) {
      startTimer();
    }
    // Counts clicks
    clickCounter++;
    // Flips the card
    event.target.parentElement.classList.add('fliped-card');
    // Checks which card was fliped
    if (!currentFirstCard) {
      currentFirstCard = event.target;
    } else {
      // Counts moves and dispaly their number to the user
      move++;
      moveControl.textContent = move;
      // Locks this eventlistener for checking time
      locked = true;
      setTimeout(function(){
        checkPair(currentFirstCard, event.target);
      }, 1200);
    }
  }
});

/**
 * @description Checks whether the fliped cards are a pair
 * @param {object} firstCard
 * @param {object} secondCard
 */
function checkPair(firstCard, secondCard) {
  // Gets data-card attribute to comparing cards
  const firstCardData = firstCard.getAttribute('data-card');
  const secondCardData = secondCard.getAttribute('data-card');
  // Compares cards
  if (firstCardData !== secondCardData) {
    // Covers fliped cards
    firstCard.parentElement.classList.remove('fliped-card');
    secondCard.parentElement.classList.remove('fliped-card');
  } else {
    firstCard.parentElement.classList.add('found-pair');
    secondCard.parentElement.classList.add('found-pair');
    // Decreases the number of remaining pairs
    remainigPairs--;
    if(remainigPairs === 0) {
      // Stops timer and end game
      stopTimer();
      finishGame();
    }
  }
  // Clears first fliped card
  currentFirstCard = null;
  // Unlocks eventListener
  locked = false;
}

/**
 * @description Turns on the stopwatch and captures the initial timestamp
 */
function startTimer() {
  startTimestamp = Date.now();
  interval = setInterval(stopWatch, 10);
}

/**
 * @description Turns off the stopwatch and captures the final timestamp
 */
function stopTimer() {
  endTimeStamp = Date.now();
  clearInterval(interval);
}


/**
 * @description Measures the time of the game and displays it to the user
 * Inspired by/Taken from: https://jsfiddle.net/Daniel_Hug/pvk6p/
 */
function stopWatch () {
  // Calculates the time units
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
  // Puts current time on the page
  const currentTime = ((hours < 10) ? "0" : "") + hours + ':'
                    + ((minutes < 10) ? "0" : "") + minutes + ':'
                    + ((seconds < 10) ? "0" : "") + seconds + ':'
                    + ((houndreth < 10) ? "0" : "") + houndreth;
  timeControl.textContent = currentTime;
}

/**
 * @description Ends game, resets timer and moves number and dispays modal
 */
function finishGame() {
  const gameTime = timeControl.textContent;
  const gameTimestampDiff = endTimeStamp - startTimestamp;
  const gameMoves = move;
  displayModal(gameTime, gameMoves);
  move = 0;
  moveControl.textContent = move;
  timeControl.textContent = '00:00:00:00';
}

/**
 * @description Shows modal to the user and dispalys him his score
 * @param {string} time
 * @param {number} moves
 */
function displayModal(time, moves) {
  endGameModal.classList.add('show-modal');
  timeResult.textContent = timeResult.textContent + time;
  movesResult.textContent = movesResult.textContent + moves;
}

// Closes end game modal
closeModal.addEventListener('click', function hideModal() {
  endGameModal.classList.remove('show-modal');
});
