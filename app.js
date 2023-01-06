'use strict';

function Main() {
  const clock = document.querySelector('.clock');
  const clocksec = document.querySelector('.sec');
  const today = document.querySelector('.footer');

  const date = new Date();
  let [hour, minutes, seconds] = [
    date.getHours(), date.getMinutes(), date.getSeconds()
  ];

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  clock.innerHTML = `${hour}:${minutes}`;
  clocksec.innerHTML = `:${seconds}`;
  today.innerHTML = date.toDateString();

  requestAnimationFrame(Main);
}
Main();


// Change stylesheet
const changeCSS = document.getElementById('changeCSS');

changeCSS.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');

  const className = document.body.className;
  if (className == 'light-mode') {
    changeCSS.src = "src/icon1.svg";
  } else {
    changeCSS.src = "src/icon2.svg";
  }

});
