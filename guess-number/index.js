let startBtn = document.querySelector('.start-btn');
let endBtn = document.querySelector('.end-btn');
let checkGuess = document.querySelector('.check-guess');
let winMessage = document.querySelector('.win-message');
let loseMessage = document.querySelector('.lose-message');
let guessesSpan = document.querySelector('.guesses');
let guessInput = document.querySelector('#guessInput');

let randomNum = null;
let guesses = 10;

startBtn.addEventListener('click', () => {
  guessInput.removeAttribute('disabled');
  randomNum = Math.floor(Math.random() * 99);
  startBtn.setAttribute('hidden', '');
  checkGuess.removeAttribute('hidden');
});

guessInput.addEventListener('input', () => {});

function checkguess() {
  if (randomNum === Number(guessInput.value)) {
    winMessage.removeAttribute('hidden');
  } else {
    loseMessage.removeAttribute('hidden');
    if (guesses >= 0) {
      guesses = guesses - 1;
      guessesSpan.textContent = guesses;
    } else {
        
    }
  }
}

checkGuess.addEventListener('click', checkguess);
