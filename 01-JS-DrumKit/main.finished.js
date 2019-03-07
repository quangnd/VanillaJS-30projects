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
  if (e.target.className === 'keys') return; //skip it if it's not a button

  const textContent = e.target.textContent;
  const audioKeyCode = textContent.charCodeAt(0);

  pressToPlaySound({ keyCode: audioKeyCode});
}

function removeTransition(e) {
  if (!e.propertyName === 'transform') return;

  this.classList.remove('playing'); 
}

function onDidLoad(e) {
  const keys = document.querySelectorAll('.key');

  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', pressToPlaySound)
  window.addEventListener('click', clickToPlaySound)
}

document.addEventListener('DOMContentLoaded', onDidLoad);

