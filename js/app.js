document.addEventListener('DOMContentLoaded', gameInitHandler);

// DOM elements
const deck = document.querySelector('#deck');
const moveControl = document.querySelector('.moves-number');
const timeControl = document.querySelector('.time');
const endGameModal = document.querySelector('.end-modal');
const timeResult = document.querySelector('.time-result');
const movesResult = document.querySelector('.moves-result');
const starsResult = document.querySelector('.stars-result');
const closeModal = document.querySelector('.close-modal');
const license = document.querySelector('.license');
const stars = document.querySelectorAll('.star');
const playAgain = document.querySelector('.play-again');
const playNewGame = document.querySelector('.play-new-game');
const gameSettings = document.querySelector('#settings-panel');
const settingsButton = document.querySelector('#settings');
const cancelButton = document.querySelector('.cancel');
const applyButton = document.querySelector('.apply');
const resetlButton = document.querySelector('.reset');
const options = document.querySelector('.options');

// Game settings object
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
        'shark', 'shrimp', 'snail', 'snake', 'spider', 'tiger', 'turkey', 'turtle', 'whale', 'whale-1'
      ],
      license: 'Card illustrations  made by <a href="http://www.freepik.com" class="footer-link" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" class="footer-link" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" class="footer-link" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
    },
    food: {
      id: 2,
      label: 'food',
      directory: 'food',
      collection: ['apple', 'baguette', 'banana', 'beans', 'biscuit', 'blueberries', 'boiled', 'bread', 'broccoli', 'cabbage',
        'candy', 'carrot', 'cauliflower', 'cheese', 'cherries', 'chili', 'chocolate', 'cookies', 'corn', 'cucumber',
        'doughnut', 'egg', 'garlic', 'grapes', 'hazelnut', 'honey', 'ice-cream', 'jam', 'lemon', 'milk',
        'onion', 'orange', 'pancakes', 'peach', 'pear', 'peas', 'pineapple', 'pizza', 'potatoes', 'radish',
        'raspberry', 'salad', 'salami', 'sausage', 'strawberry', 'toast', 'tomato', 'turkey', 'water', 'watermelon'
      ],
      license: 'Card illustrations  made by <a href="https://www.flaticon.com/authors/smashicons" class="footer-link" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" class="footer-link" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" class="footer-link" target="_blank">CC 3.0 BY</a>'
    },
    flags: {
      id: 3,
      label: 'flags',
      directory: 'flags',
      collection: ['algeria', 'argentina', 'australia', 'austria', 'belgium', 'brazil', 'cameroon', 'canada', 'chile', 'china',
        'colombia', 'cuba', 'czechia', 'denmark', 'egypt', 'finland', 'france', 'germany', 'greece', 'india',
        'ireland', 'israel', 'italy', 'jamaica', 'japan', 'mexico', 'morocco', 'netherlands', 'new-zealand', 'nigeria',
        'norway', 'paraguay', 'peru', 'philippines', 'poland', 'portugal', 'russia', 'saudi-arabia', 'senegal', 'south-africa',
        'spain', 'sweden', 'switzerland', 'tanzania', 'thailand', 'turkey', 'uganda', 'ukraine', 'united-kingdom', 'united-states'
      ],
      license: 'Card illustrations  made by <a href="http://www.freepik.com" class="footer-link" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" class="footer-link" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" class="footer-link" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
    },
    christmas: {
      id: 4,
      label: 'christmas',
      directory: 'christmas',
      collection: ['bauble', 'bauble-1', 'bauble-2', 'bauble-3', 'bauble-4', 'bauble-5', 'bauble-6', 'bauble-7', 'bauble-8', 'bauble-9',
        'bauble-10', 'bauble-11', 'bauble-12', 'bauble-13', 'baubles', 'bells', 'bells-1', 'bow', 'cabin-2', 'candle',
        'candle-1', 'candle-2', 'candle-4', 'candy', 'candy-1', 'candy-2', 'candy-3', 'candy-4', 'candy-cane', 'candy-cane-1', 'candy-canes',
        'christmas-card', 'christmas-card-1', 'christmas-sock', 'christmas-tree', 'christmas-wreath', 'christmas-wreath-1', 'garlands', 'gift', 'gift-1', 'gift-2',
        'gift-3', 'gingerbread-man', 'lights', 'mistletoe', 'mistletoe-1', 'reindeer', 'santa-claus', 'snow-globe-1', 'snowman'
      ],
      license: 'Card illustrations made by <a href="https://www.flaticon.com/authors/smashicons" class="footer-link" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" class="footer-link" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" class="footer-link" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
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
    easy: {
      label: 'easy',
      pairs: 8,
      limitModifier: 1,
      threeStarLimit: 16, // limitModifier * (2*pairs)
      twoStarLimit: 20, // 1.25 * threeStarLimit
    },
    normal: {
      label: 'normal',
      pairs: 18,
      limitModifier: 1.3,
      threeStarLimit: 47, // limitModifier * (2*pairs)
      twoStarLimit: 59, // 1.25 * threeStarLimit
    },
    hard: {
      label: 'hard',
      pairs: 32,
      limitModifier: 1.9,
      threeStarLimit: 122, // limitModifier * (2*pairs)
      twoStarLimit: 152, // 1.25 * threeStarLimit
    },
    expert: {
      label: 'expert',
      pairs: 50,
      limitModifier: 1.9,
      threeStarLimit: 190, // limitModifier * (2*pairs)
      twoStarLimit: 238, // 1.25 * threeStarLimit
    }
  },
  gameBoard: {
    background: {
      blue: 'blue-board',
      red: 'red-board',
      green: 'green-board'
    }
  }
}
// Initial values
const initiaLevel = 'normal';
const initialReverse = 'blue';
const initialObverse = 'flags';
const initialBackground = 'green';

// Sets current values to initial values
let level = initiaLevel;
let reverse = initialReverse;
let obverse = initialObverse;
let background = initialBackground;

// Sets variables for settings panel
let selectedLevel = initiaLevel;
let selectedObverse = initialObverse;
let selectedReverse = initialReverse;
let selectedBackground = initialBackground;

// Game status variables
// Used for blocking card clicking during pair checking
let locked = false;
// Stores the number of found pairs
let foundPairs = 0;
// Stores the first of the two flipped cards
let currentFirstCard = null;
// Stores the number of clicks
let clickCounter = 0;
// Stores the number of moves
let move = 0;
// Stores star rating
let starRating = 3;
// Variables for time measurement
let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let houndreth = 0;
// TODO for future use (saving best scores)
let startTimestamp;
let endTimeStamp;

// Stores limits of moves by stages used for rating feature
let ratingLimitsForCurrentLevel = calculateRatingLimits();

// Animation types
const notFoundPairAnimation = 'wobble';
const foundPairAnimation = 'tada';

// Detects browser specific animation end event name
// https://github.com/daneden/animate.css
const animationEnd = (function (element) {
  const animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (let propName in animations) {
    if (element.style[propName] !== undefined) {
      return animations[propName];
    }
  }
})(document.createElement('div'));



//////////////////// GAME INIT ////////////////////
/**
 * @description Initiates the game
 */
function gameInitHandler() {
  insertCurrentDate();
  prepareGame();
}

/**
 * @description Inserts current year to the website footer
 */
function insertCurrentDate() {
  const pageDate = document.querySelector('#years');
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const startYear = 2018;
  pageDate.textContent = (year > startYear) ? startYear + '–' + year : startYear;
}



//////////////////// GAME START ////////////////////
/**
 * @description Starts new game
 */
function startNewGame() {
  hideModal();
  resetGame();
  prepareGame();
}

/**
 * @description Resets game
 */
function resetGame() {
  deck.innerHTML = '';
  resetStopwatch();
  endTimeStamp = 0;
  startTimestamp = 0;
  clickCounter = 0;
  move = 0;
  moveControl.textContent = move;
  timeControl.textContent = '00:00:00:00';
  currentFirstCard = null;
  locked = false;
  foundPairs = 0;
  starRating = 3;
}

/**
 * @description Prepares game
 */
function prepareGame() {
  insertImagesLicenseInfo();
  configureGame();
  placeCards(reverse, obverse, level);
  setCurrentRating();
}

/**
 * @description Configures settings panel
 */
function configureSettingsPanel() {
  const selectedLevelButton = options.querySelector('[data-level="' + selectedLevel + '"]');
  const selectedObverseButton = options.querySelector('[data-theme="' + selectedObverse + '"]');
  const selectedReverseButton = options.querySelector('[data-reverse="' + selectedReverse + '"]');
  const selectedBackgroundButton = options.querySelector('[data-background="' + selectedBackground + '"]');

  selectedLevelButton.classList.remove('selected');
  selectedObverseButton.classList.remove('selected');
  selectedReverseButton.classList.remove('selected');
  selectedBackgroundButton.classList.remove('selected');

  const levelButton = options.querySelector('[data-level="' + level + '"]');
  const obverseButton = options.querySelector('[data-theme="' + obverse + '"]');
  const reverseButton = options.querySelector('[data-reverse="' + reverse + '"]');
  const backgroundButton = options.querySelector('[data-background="' + background + '"]');

  levelButton.classList.add('selected');
  obverseButton.classList.add('selected');
  reverseButton.classList.add('selected');
  backgroundButton.classList.add('selected');
}

/**
 * @description Sets the game options
 */
function configureGame() {
  configureSettingsPanel();
  const board = document.querySelector('body');
  const currentClass = board.getAttribute('class');

  if (currentClass) {
    board.classList.remove(currentClass);
  }
  board.classList.add(settings.gameBoard.background[background]);
}

/**
 * @description Inserts information about images origin
 */
function insertImagesLicenseInfo() {
  license.innerHTML = settings.obverseTypes[obverse].license;
}

// Starts new game on buttons click
playNewGame.addEventListener('click', startNewGame);
playAgain.addEventListener('click', startNewGame);



//////////////////// CREATE, SHUFFLE AND PLACE CARDS ////////////////////
/**
 * @description Puts the shuffled cards on the board
 * @param {string} reverseType
 * @param {string} obverseType
 * @param {string} level
 */
function placeCards(reverseType, obverseType, Level) {
  // Determines the number of pairs
  const pairsOfCards = settings.difficultyLevels[level].pairs;
  // Determines proper reverses and directory
  const reversTypeClass = settings.reverseTypes[reverseType].class;
  const cardsDirectory = settings.obverseTypes[obverseType].directory;
  // Randomly chooses cards, then limits their number according to the game level
  const cards = shuffle(settings.obverseTypes[obverseType].collection).slice(0, pairsOfCards);
  // Doubles the cards to create pairs, then shuffles them
  const doubleShuffleCards = shuffle(cards.concat(cards));

  const cardList = document.createDocumentFragment();
  // Populates cardList with newly created cards
  for (card of doubleShuffleCards) {
    const newCard = createCard(card, reversTypeClass, cardsDirectory, level);
    cardList.appendChild(newCard);
  }

  // Adds the appropriate class tothe list based on the game level
  deck.classList.add(level + '-level-deck');
  deck.appendChild(cardList);
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
  // Creates the card container
  const newCardPlace = document.createElement('li');
  newCardPlace.classList.add('card-place', level + '-level-place');

  // Creates the card
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  // Creates the reverse of the card
  const newReverse = document.createElement('div');
  newReverse.classList.add('reverse', reversTypeClass);
  newReverse.setAttribute('data-card', card);
  newReverse.setAttribute('data-reverse', true);

  // Creates the obverse of the card
  const newObverse = document.createElement('div');
  newObverse.classList.add('reverse', 'obverse');
  newObverse.setAttribute('data-card', card);

  // Creates the image of the card
  const obverseImage = document.createElement('img');
  obverseImage.classList.add('card-image');
  obverseImage.setAttribute('src', ('img/' + directory + '/' + card + '.svg'));

  newObverse.appendChild(obverseImage);
  newCard.appendChild(newReverse);
  newCard.appendChild(newObverse);
  newCardPlace.appendChild(newCard);

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



//////////////////// SEARCHING FOR PAIRS ////////////////////
// Flips card on click event
deck.addEventListener('click', function flipCard(event) {
  if (!locked && event.target.dataset.reverse && event.target !== currentFirstCard) {
    // Checks whether to enable the countdown of time
    if (clickCounter === 0) {
      startTimer();
    }

    clickCounter++;
    // Flips the card
    event.target.parentElement.classList.add('flipped-card');
    if (!currentFirstCard) {
      // Saves first of two flipped card
      currentFirstCard = event.target;
    } else {
      // For second flipped card update game controls and check pair
      move++;
      moveControl.textContent = move;
      locked = true;
      checkPair(currentFirstCard, event.target);
    }
  }
});

/**
 * @description Checks whether the flipped cards are valid pair
 * @param {object} firstCard
 * @param {object} secondCard
 */
function checkPair(firstCard, secondCard) {
  const firstCardData = firstCard.getAttribute('data-card');
  const secondCardData = secondCard.getAttribute('data-card');

  if (firstCardData !== secondCardData) {
    // Runs proper cards animation and updates rating
    animateCards(firstCard, secondCard, false);
    setCurrentRating();
  } else {
    // Runs proper cards animation, updates foundPairs and rating
    animateCards(firstCard, secondCard, true);
    foundPairs++;
    setCurrentRating();
    // Ends game
    if (foundPairs === settings.difficultyLevels[level].pairs) {
      finishGame();
    }
  }
  // Clears first flipped card
  currentFirstCard = null;
}

/**
 * @description Handles checking pair animations
 * @param {Object} firstCard
 * @param {Object} secondCard
 * @param {Boolean} isPairFound
 */
function animateCards(firstCard, secondCard, isPairFound) {
  // Chooses proper animation style
  const animationStyle = (isPairFound) ? foundPairAnimation : notFoundPairAnimation;
  // Turns on proper animation
  firstCard.parentElement.parentElement.classList.add('animated', animationStyle);
  secondCard.parentElement.parentElement.classList.add('animated', animationStyle);
  // Adds animation end handlers
  firstCard.parentElement.parentElement.addEventListener(animationEnd, animationEndHandler);
  secondCard.parentElement.parentElement.addEventListener(animationEnd, animationEndHandler);

  /**
   * @description Cleanup after animation, covers wrong cards or marks found pair
   * @param {Object} eveny
   */
  function animationEndHandler(event) {
    event.target.classList.remove('animated', animationStyle);
    event.target.removeEventListener(animationEnd, animationEndHandler);

    const card = event.target.childNodes[0];
    if (isPairFound) {
      card.classList.add('found-pair');
    } else {
      card.classList.remove('flipped-card');
    }

    locked = false;
  }
}



//////////////////// TIME MEASUREMENT FEATURE ////////////////////
/**
 * @description Turns on the stopwatch and captures the initial timestamp for best scores tabele (future feature)
 */
function startTimer() {
  startTimestamp = Date.now();
  interval = setInterval(stopWatch, 10);
}

/**
 * @description Turns off the stopwatch and captures the final timestamp for best scores tabele (future feature)
 */
function stopTimer() {
  endTimeStamp = Date.now();
  resetStopwatch();
}

/**
 * @description Measures the time of the game and displays it to the user
 * Inspired by/Taken from: https://jsfiddle.net/Daniel_Hug/pvk6p/
 */
function stopWatch() {
  houndreth++;
  if (houndreth >= 100) {
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
  const currentTime = ((hours < 10) ? "0" : "") + hours + ':' +
    ((minutes < 10) ? "0" : "") + minutes + ':' +
    ((seconds < 10) ? "0" : "") + seconds + ':' +
    ((houndreth < 10) ? "0" : "") + houndreth;
  timeControl.textContent = currentTime;
}

/**
 * @description Resets stopwatch and its variables
 */
function resetStopwatch() {
  clearInterval(interval);
  houndreth = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
}



//////////////////// FINISH GAME ////////////////////
/**
 * @description Ends game, dispays modal and resets game controls
 */
function finishGame() {
  stopTimer();
  const gameTime = timeControl.textContent;
  // gameTimestampDiff for best scores tabele (future feature)
  const gameTimestampDiff = endTimeStamp - startTimestamp;
  const gameMoves = move;
  const gameRating = starRating;
  setTimeout(function(){
    displayModal(gameTime, gameMoves, gameRating);
  }, 1500);
}

/**
 * @description Shows modal to the user
 * @param {string} time
 * @param {number} moves
 * @param {number} stars
 */
function displayModal(time, moves, stars) {
  endGameModal.classList.add('show-modal');
  starsResult.innerHTML = '';
  timeResult.textContent = time;
  movesResult.textContent = moves;
  const starElements = document.createDocumentFragment();
  for (let i = 1; i <= stars; i++) {
    const star = document.createElement('i');
    star.classList.add('fas', 'fa-star');
    starElements.appendChild(star);
  }
  starsResult.appendChild(starElements);
}

// Hides modal on click
closeModal.addEventListener('click', hideModal);

/**
 * @description Hide modal
 */
function hideModal() {
  endGameModal.classList.remove('show-modal');
}



//////////////////// STAR RATING FEATURE ////////////////////
/**
 * @description Calculates limits of moves by stages used for rating feature
 * @returns {array}
 */
function calculateRatingLimits() {
  const limitsForStages = [];
  const pairs = settings.difficultyLevels[level].pairs;
  const threeStarLimit = settings.difficultyLevels[level].threeStarLimit;
  const limitModifier = settings.difficultyLevels[level].limitModifier;
  let remainingLimit = threeStarLimit;

  // Distributes star limits for level per subsequent stages
  for (let i = 0; i < pairs; i++) {
    const stageStep = Math.round(Math.sqrt(remainingLimit) * (1 / limitModifier));
    const stageThreeStarLimit = (i === 0) ? stageStep : stageStep + limitsForStages[i - 1][0];
    const stageTwoStarLimit = Math.round(1.25 * stageThreeStarLimit);
    limitsForStages.push([stageThreeStarLimit, stageTwoStarLimit]);
    remainingLimit -= stageStep;
  }
  return limitsForStages;
}

/**
 * @description Sets proper star rating value
 * @returns {array}
 */
function setCurrentRating() {
  const index = (foundPairs >= ratingLimitsForCurrentLevel.length) ? (ratingLimitsForCurrentLevel.length - 1) : foundPairs;
  if (move <= ratingLimitsForCurrentLevel[index][0]) {
    starRating = 3;
  } else if (move > ratingLimitsForCurrentLevel[index][1]) {
    starRating = 1;
  } else {
    starRating = 2;
  }
  for (let i = 0; i < stars.length; i++) {
    if (i < starRating) {
      stars[i].classList.add('white-star');
    } else {
      stars[i].classList.remove('white-star');
    }
  }
}



//////////////////// SETTING PANEL FEATURE ////////////////////
// Shows setting panel on button click
settingsButton.addEventListener('click', addSettingsPanel);

// Changes game options
options.addEventListener('click', function chooseOption(event) {
  let button;
  if (event.target.parentElement.nodeName === 'BUTTON') {
    button = event.target.parentElement;
  } else if (event.target.nodeName === 'BUTTON') {
    button = event.target;
  } else {
    return;
  }
  //Turns off previous selected button
  const previousSelected = button.parentElement.querySelector('.selected');
  if (previousSelected !== null) {
    previousSelected.classList.remove('selected');
  }
  button.classList.add('selected');

  //Gets dataset key
  const currentOption = Object.keys(button.dataset)[0];
  // Sets proper game option
  switch (currentOption) {
    case 'level':
      selectedLevel = button.dataset.level;
      break;
    case 'theme':
      selectedObverse = button.dataset.theme;
      break;
    case 'reverse':
      selectedReverse = button.dataset.reverse;
      break;
    case 'background':
      selectedBackground = button.dataset.background;
      break;
    default:
      null;
  }
});

//Applies selected option
applyButton.addEventListener('click', function applyOptions() {
  // Removes old class depending on previous game level
  deck.classList.remove(level + '-level-deck');
  level = selectedLevel;
  obverse = selectedObverse;
  reverse = selectedReverse;
  background = selectedBackground;
  ratingLimitsForCurrentLevel = calculateRatingLimits();
  startNewGame();
  removeSettingsPanel();
});

// Resets selected game options
resetlButton.addEventListener('click', function resetOptions() {
  configureSettingsPanel();
  resetSelectedOptions();
});

// Resets selected options and hides settings panel
cancelButton.addEventListener('click', function cancelOptions() {
  configureSettingsPanel();
  resetSelectedOptions();
  removeSettingsPanel();
});

// Resetes variables with selected options
function resetSelectedOptions() {
  selectedLevel = level;
  selectedObverse = obverse;
  selectedReverse = reverse;
  selectedBackground = background;
}

//Shows settings panel
function addSettingsPanel() {
  gameSettings.classList.add('open');
}

//Hides settings panel
function removeSettingsPanel() {
  gameSettings.classList.remove('open');
}