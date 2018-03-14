document.addEventListener('DOMContentLoaded', gameInitHandler);
const deck = document.querySelector('#cards');
const initiaLevel = 'easy';
const initialReverse = 'blue';
const initialObverse = 'flags';

let level = initiaLevel;
let reverse = initialReverse;
let obverse = initialObverse;



const obverseTypes = {
  animals: {
    id: 1,
    label: 'letters',
    directory: 'letters',
    collection: [],
    license: 'Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
  },
  food: {
    id: 2,
    label: 'food',
    label: 'food',
    collection: [],
    license: 'Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
  },
  flags: {
    id: 4,
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
};
const reverseTypes = {
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
    class: 'green-reverse'
  },
  udacity: {
    id: 1,
    class: 'udacity-reverse'
  },
  author: {
    id: 1,
    class: 'author-reverse'
  },
};
const difficultyLevels = {
  easy: 8,
  normal: 16,
  hard: 32,
  advanced: 50
};

/**
 * @description Initiate game
 */
function gameInitHandler() {
  insertPageDate();
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

/**
 * @description place cards on the board
 */
function placeCards(reverseType, obverseType, Level) {
  const reversTypeClass = reverseTypes[reverseType].class;
  const cardsDirectory = obverseTypes[obverseType].directory;

  const cards = shuffle(obverseTypes[obverseType].collection).splice(level-1);
  const doubleShuffleCards = shuffle(cards.concat(cards));
  const cardList = document.createDocumentFragment();

  for (card of doubleShuffleCards) {
    const newCard = createCard(card, reversTypeClass, cardsDirectory);
    cardList.appendChild(newCard);
  }

  deck.appendChild(cardList);
}

/**
 * @description Create card
 * @param {string} card
 * @param {string} reversTypeClass
 * @param {string} directory
 * @return {object}
 */
function createCard(card, reversTypeClass, directory) {
  const newCardPlace = document.createElement('li');
  newCardPlace.classList.add('card-place');

  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newReverse = document.createElement('div');
  newReverse.classList.add('reverse', reversTypeClass);
  newReverse.setAttribute('data-card', card);

  const newObverse = document.createElement('div');
  newObverse.classList.add('reverse', 'obverse');
  newObverse.setAttribute('data-card', card);

  const cardImage = document.createElement('img');
  cardImage.classList.add('card-image');
  cardImage.setAttribute('src', ('img/' + directory + '/' + card + '.svg'));

  newObverse.appendChild(cardImage);
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