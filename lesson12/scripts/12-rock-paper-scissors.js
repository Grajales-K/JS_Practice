//this will store the score of the game and update it after each round
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();


const stopButton = document.querySelector('.auto-play-button ');
const resetButton = document.querySelector('.reset-score-button');
const resetMessage = document.querySelector('.reset-message'); //12x

// exercise 12t.
stopButton.addEventListener('click', () => {
  autoPlay();
});

// 12v exercise update event Reset Score.
resetButton.addEventListener('click', () => {
  showResetConfirmation();
});

// 12v create a function to reset the score and ready to use it in diferent places.
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}


//12x. display a message before to reset the score and hide the message after the user confirm or cancel the action.
function showResetConfirmation() {
  resetMessage.innerHTML = `
    Are you sure you want to reset the score?
    <button class="confirm-reset-button">Yes</button>
    <button class="cancel-reset-button">No</button>`;

  //Lister for user confirmation to reset the score.
  document.querySelector('.confirm-reset-button')
    .addEventListener('click', () => {
      resetScore();
      resetMessage.innerHTML = ''; // hide the message after resetting the score
    });

  document.querySelector('.cancel-reset-button')
    .addEventListener('click', () => {
      resetMessage.innerHTML = '';
    });
}


let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    stopButton.innerHTML = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    stopButton.innerHTML = 'Auto Play';
  }
}


document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

// --------------------------

/* I have this other option to update the reset button, where I can use the resetScore function directly in the event listener, but I did  the function showResetConfirmation function to display a message before resetting the score. This way, the user can confirm or cancel the action before the score is reset. 

thi is displayed on line 11 and 19  */

// document.querySelector('.reset-score-button')
//   .addEventListener('click', () =>{
//       showResetConfirmation();
//   })

// -------------------- 


// added a body event to allow user to play the game using keyboard keys, and this property will work and return the key pressed. this is an example of multiple event listener being used and executed.
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors'); //exercise 12u.
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    resetScore();
  }
});

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
