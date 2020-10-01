'use strict';

const button = document.querySelector('.celebrate-btn');
const confetti = document.querySelector('.container');
let active = false;

const sounds = [{ url: '/sounds/victory.wav', length: 3000 }];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const resetButton = () => {
  button.classList.remove('rotate');
  confetti.classList.remove('show');
  active = false;
};

const handleCelebrateButton = () => {
  if (!active) {
    active = true;
    const sound = shuffle(sounds);
    const soundLength = sound[0].length;
    const audioObj = new Audio(sound[0].url);

    button.classList.add('rotate');
    confetti.classList.add('show');

    audioObj.play();

    setTimeout(resetButton, soundLength);
  }

  return;
};

button.addEventListener('click', handleCelebrateButton);
