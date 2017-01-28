document.addEventListener('DOMContentLoaded', function(e){
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
    window.addEventListener('click', clickToPlaySound);
});


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing'); //add CSS class
    audio.currentTime = 0; //sets the current position of the audio playback.
    audio.play();
}

function clickToPlaySound(e) {
    const textContent = e.target.textContent;
    const audioKeyCode = textContent.charCodeAt(0);
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
     const key = document.querySelector(`div[data-key="${audioKeyCode}"]`);
    if (!audio) return;

    key.classList.add('playing'); 
    audio.currentTime = 0; //sets the current position of the audio playback.
    audio.play();
}