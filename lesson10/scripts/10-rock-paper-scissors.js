//this will store the score of the game and update it after each round
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/* just reference, the above code is equivalent to the following code:
        if(!score) {
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            }
        }
        */

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You Lose.';
    } else if (computerMove === 'scissors') {
      result = 'You Win.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You Lose.';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You Lose.';
    } else if (computerMove === 'paper') {
      result = 'You Win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  // temporal scores, if you refresh the page the scores will start again

  //we use the assignment operator to update the score object based on the result of the game
  if (result === 'You Win.') {
    score.wins += 1;
  } else if (result === 'You Lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  // to avoid this scores being lost when the page is refreshed, we can use local storage to store the scores in the browser's memory. This way, even if the page is refreshed, the scores will be preserved and can be retrieved later.
  localStorage.setItem('score', JSON.stringify(score));

  //this function will update the score element in the HTML with the current scores after each round
  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
                <img src = "/img-exercises/lesson10/${playerMove}-emoji.png" class="move-icon">

                <img src = "/img-exercises/lesson10/${computerMove}-emoji.png" class="move-icon"> Computer`;
}

function updateScoreElement() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  let computerMove = '';

  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
