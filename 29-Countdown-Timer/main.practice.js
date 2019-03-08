// Lesson 29: Countdown
/**
 * Requirements
 * 1. Write a simple countdown function
 * 2. Make Task options work

*/

// ⚠️ DON'T CHECK main.finish.js file UNLESS YOU TRIED HARD 😎

//----------------------
// Your code starts here
let countDown;
const timeLeft = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');
const buttonTimes = document.querySelectorAll('.timer__button');

function timer(seconds) {
  displaySecondsLeft(seconds);
  const now = Date.now();
  then = now + seconds * 1000;
  displayTimeEnd(then);
  countDown = setInterval(function() {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft <= 0) {
      clearInterval(countDown);
      timeEnd.textContent = 'Time Ended!!!';
      timeLeft.textContent = ''
      return;
    }
    displaySecondsLeft(secondsLeft);
  }, 1000);
}

function displaySecondsLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;
  timeLeft.textContent = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
}

function displayTimeEnd(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  timeEnd.textContent = `Be back at ${hours}:${minutes < 10 ? '0': ''}${minutes}`;
}

function setTimer(e) {
  timer(parseInt(this.dataset.time));
}
buttonTimes.forEach(button => button.addEventListener('click', setTimer))

function handlerSubmit(e) {
  e.preventDefault();
  const seconds = this.minutes.value * 60;
  timer(seconds);
  this.reset();
}

timeEnd.textContent = 'Please choose a countdown time to start...'
document.customForm.addEventListener('submit', handlerSubmit);
