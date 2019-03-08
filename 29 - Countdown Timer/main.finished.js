/**
 *  ⚠️ DO NOT READ this file UNLESS YOU TRIED HARD 😎
 */

let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerButtons = document.querySelectorAll('.timer__button');

function timer(seconds) {
  clearInterval(countDown); //clear any existing timer

  displayTimeLeft(seconds); //fix delay the first second
  const now = Date.now();
  const then = now + seconds * 1000; 
  displayEndTime(then);
  countDown = setInterval(function() {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check stop condition
    if (secondsLeft <=0) {
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const adjustedHours = hours > 12 ? hours - 12 : hours;
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${adjustedHours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(e) {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function handlerSubmit(e) {
  e.preventDefault();
  const minutes = this.minutes.value;
  timer(minutes * 60);
  this.reset(); //clear out the value in form
}

timerButtons.forEach(timer => timer.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', handlerSubmit);
