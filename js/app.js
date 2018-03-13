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
    collection: ['poland', 'united-kingdom', 'poland', 'united-kingdom', 'poland', 'united-kingdom', 'poland', 'united-kingdom'],
    license: 'Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
  },
  holiday: {
    id: 4,
    label: 'holiday',
    directory: 'holiday',
    collection: [],
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
}
