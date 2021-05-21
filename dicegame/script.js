'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

score0El.textContent = 0;
score1El.textContent = 0;

const dice = document.querySelector('.dice');
console.log(dice);
dice.style.display = 'none';

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

let current0 = 0;

let current1 = 0;

let score0 = 0;
let score1 = 0;
const displayDice = function () {
  let dicenum = Math.trunc(Math.random() * 6) + 1;
  if (player0.classList.contains('player--active')) {
    current0 += dicenum;
  } else if (player1.classList.contains('player--active')) {
    current1 += dicenum;
  }
  switch (dicenum) {
    case 1:
      dice.src = `dice-1.png`;
      dice.style.display = 'block';
      if (
        player0.classList.contains('player--active') &&
        score0 < 100 &&
        score1 < 100
      ) {
        current0 = 0;
        currentScore0.textContent = current0;
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
      } else if (
        player1.classList.contains('player--active') &&
        score0 < 100 &&
        score1 < 100
      ) {
        current1 = 0;
        currentScore1.textContent = current1;
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
      }
      break;
    case 2:
      dice.src = `dice-2.png`;
      dice.style.display = 'block';
      break;
    case 3:
      dice.src = `dice-3.png`;
      dice.style.display = 'block';
      break;
    case 4:
      dice.src = `dice-4.png`;
      dice.style.display = 'block';
      break;
    case 5:
      dice.src = `dice-5.png`;
      dice.style.display = 'block';
      break;
    case 6:
      dice.src = `dice-6.png`;
      dice.style.display = 'block';
      break;
  }
};
const btnRollDice = document.querySelector('.btn--roll');

btnRollDice.addEventListener('click', function () {
  if (score0 < 100 && score1 < 100) {
    displayDice();
    if (player0.classList.contains('player--active')) {
      currentScore0.textContent = current0;
    }
    if (player1.classList.contains('player--active')) {
      currentScore1.textContent = current1;
    }
  }
});

const btnHold = document.querySelector('.btn--hold');

btnHold.addEventListener('click', function () {
  if (score0 < 100 && score1 < 100) {
    if (player0.classList.contains('player--active')) {
      score0 += current0;
      score0El.textContent = score0;
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
      currentScore0.textContent = 0;
      current0 = 0;
      if (score0 >= 100) {
        player0.classList.add('player--winner');
      }
    } else if (player1.classList.contains('player--active')) {
      score1 += current1;
      score1El.textContent = score1;
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
      currentScore1.textContent = 0;
      current1 = 0;
      if (score1 >= 100) {
        player1.classList.add('player--winner');
      }
    }
  }
});

const btnNewGame = document.querySelector('.btn--new');

btnNewGame.addEventListener('click', function () {
  if (score1 >= 100) {
    player1.classList.remove('player--winner');
  }
  if (score0 >= 100) {
    player0.classList.remove('player--winner');
  }
  score0 = 0;
  score1 = 0;
  current0 = 0;
  current1 = 0;
  score0El.textContent = score0;
  score1El.textContent = score1;
  currentScore0.textContent = current0;
  currentScore1.textContent = current1;
  dice.style.display = 'none';
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
});
