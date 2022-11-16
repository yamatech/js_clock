const Main = () => {
  let date = new Date();
  let clock = document.querySelector('#clock');
  let today = document.querySelector('#today');
  clock.innerHTML = date.toLocaleTimeString();
  today.innerHTML = date.toDateString();
}

window.onload = () => {
  setInterval(function () {
    Main();
  }, 1000);
};


// Change stylesheet
const changeCSS = document.getElementById('changeCSS');

changeCSS.addEventListener('click', function () {

  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');

  const className = document.body.className;
  if(className == 'light-mode') {
    this.textContent = "🔅";
  } else {
    this.textContent = "🔆";
  }

  console.log('current className: ' + className);

});


/* 

memo:

const date = new Date();

const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

 */
