'use strict';

function updateClock() {
  const clockEl = document.querySelector('.clock');
  const secondsEl = document.querySelector('.sec');
  const todayEl = document.querySelector('.today');

  const date = new Date();
  const hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  clockEl.textContent = `${hour}:${minutes}`;
  secondsEl.textContent = `:${seconds}`;
  todayEl.textContent = date.toDateString();
}

setInterval(updateClock, 1000);


// Change stylesheet
const changeCSS = document.getElementById('changeCSS');

changeCSS.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');

  const className = document.body.className;
  className === 'light-mode' ? changeCSS.src = "src/icon1.svg" : changeCSS.src = "src/icon2.svg";

});
