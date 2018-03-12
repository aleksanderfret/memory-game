document.addEventListener('DOMContentLoaded', gameInitHandler);

/**
 * @description Initiate game
 */
function gameInitHandler() {
  insertPageDate();
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