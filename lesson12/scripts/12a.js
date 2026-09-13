console.log('======== 12a. function running twice ========');
// 12a. Create a variable called 'add' and save a function inside. This function will console.log(2+3); run the function twice.

const add = function () {
  console.log(2 + 3);
};

add(); // Call the function once
add(); // Call the function again

console.log('======== 12b. function running twice ========');
/* 12b. continuing from the exercise above, create a function runtwice(fn) that takes a function (as parameter) and runs it twice.
 * runTwice(funtion(){console.log(12b)}); => console.log(12b) twice.
 * runTwice(add); => console.log(5) twice. */

//we pass a anonymous function to runTwice that logs '12b' to the console
runTwice(function () {
  console.log('12b');
}); //12b, 12b

function runTwice(fn) {
  fn();
  fn();
}

runTwice(add); //5, 5

console.log('======== 12c. button with event ========');
//12c.  create a button. When clicking the button, after 1 second, the text inside the button changes to 'finished', use setTimeout() and DOM.

const container = document.querySelector('.event-btn');
const button = document.createElement('button');
button.textContent = 'Start';
container.appendChild(button);

button.addEventListener('click', function () {
  setTimeout(function () {
    button.textContent = 'Finished';
  }, 1000);
});

console.log('======== 12d. button with event ========');
/*12d. Continuing from the previus exercise, modify the button so that when we click it, the text inmmediately changes to 'loading...', and after 1 second, it changes to 'finished'.*/

const container2 = document.querySelector('.event-btn2');
const button2 = document.createElement('button');
button2.textContent = 'start';
container2.appendChild(button2);

button2.addEventListener('click', function () {
  button2.textContent = 'loading...';
  setTimeout(function () {
    button2.textContent = 'finished';
  }, 1000);
});

console.log('======== 12e. button event message ========');
/*12e. Create a 'Add to Cart' button. When clicking the button, display the message 'added' below the button. Then, after 2 seconds, remove the message. */

const container3 = document.querySelector('.add-btn');
const button3 = document.createElement('button');
button3.textContent = 'Add to Cart';
container3.appendChild(button3);

button3.addEventListener('click', function () {
  const message = document.createElement('p');
  message.textContent = 'Added';
  container3.appendChild(message);

  setTimeout(function () {
    // container3.removeChild(message);
    message.textContent = '';
  }, 2000);
});


console.log('======== 12f. Challenge Exercises ========');
/*12f. Continuing from 12e, If we click the button, wait 1 to 1.5 seconds, and then click the button again, notice that the second time, the message dissapears very quickly (because the first SetTiemout is still running and will make the message disappear very soon).

Modify the code so when we click the button, it refreshes the 2 seconds wait time, wait for two seconds and remove message.*/

console.log('======== 12f. Challenge Exercises ========');

const container4 = document.querySelector('.add-btn2');
const button4 = document.createElement('button');
button4.textContent = 'Add to Cart';
container4.appendChild(button4);

const message = document.createElement('p');
container4.appendChild(message);


let timeoutId;

button4.addEventListener('click', function () {
  message.textContent = 'Added';
  //this will clean the time in case event is triggered again before the timeout is completed, so the message will stay for 2 seconds after the last click.
  clearTimeout(timeoutId);

  // 3. Guardamos el nuevo temporizador en la variable
  timeoutId = setTimeout(function () {
    message.textContent = '';
  }, 2000);
});

console.log('======== 12g. setInterval change the title. ========');
/*12g. Imagine we're creating a messaging app. Use setInterval and documents.title to create the features on the right (the title changes every 1 second). */

function changeTitle() {
  let isNewMessage = false;

  setInterval(function () {
    if (isNewMessage) {
      document.title = 'App';
      isNewMessage = false;
    } else {
      document.title = '(2) New Messages';
      isNewMessage = true;
    }
  }, 1000);
}

changeTitle();