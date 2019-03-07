
function setDate() {
  const secondHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegress = ((mins / 60) *  360)  + ((seconds/60)*6) + 90;
  minHand.style.transform = `rotate(${minsDegress}deg)`;

  const hours = now.getHours();
  const hoursDegress = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hoursDegress}deg)`;

}

function onDidLoad(e) {
  setDate();
  setInterval(setDate, 1000);
}

document.addEventListener('DOMContentLoaded', onDidLoad);
