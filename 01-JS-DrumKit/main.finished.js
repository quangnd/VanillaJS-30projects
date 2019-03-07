/**
 *  ⚠️ DO NOT READ this file UNLESS YOU TRIED HARD 😎
 */

function pressToPlaySound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  key.classList.add('playing'); //add transition effect
  audio.currentTime = 0; //rewind to start
  audio.play();
}

function clickToPlaySound(e) {
  const textContent = e.target.outerText;
  const audioKeyCode = textContent && textContent[0].charCodeAt(0);

  pressToPlaySound({ keyCode: audioKeyCode});
}

function removeTransition(e) {
  if (!e.propertyName === 'transform') return;

  this.classList.remove('playing'); 
}

function onDidLoad(e) {
  const keys = document.querySelectorAll('.key');

  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', clickToPlaySound);
  });

  window.addEventListener('keydown', pressToPlaySound)
}

document.addEventListener('DOMContentLoaded', onDidLoad);

