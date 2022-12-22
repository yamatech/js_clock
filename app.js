
function Main() {
  const date = new Date();
  const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const clock = document.querySelector('.clock');
  const clocksec = document.querySelector('.sec');
  const today = document.querySelector('.footer');

  let min = minutes;
  let sec = seconds;
  if (minutes < 10) { min = `0${minutes}`; }
  if (seconds < 10) { sec = `0${seconds}`; }

  clock.innerHTML = `${hour}:${min}`;
  clocksec.innerHTML = `:${sec}`;
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
