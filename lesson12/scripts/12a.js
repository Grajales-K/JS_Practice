console.log('======== 12a. function running twice ========');
// 12a. Create a variable called 'add' and save a function inside. This function will console.log(2+3); run the function twice.

const add = function() {
    console.log(2 + 3);
};

add(); // Call the function once
add(); // Call the function again


console.log('======== 12b. function running twice ========');
/* 12b. continuing from the exercise above, create a function runtwice(fn) that takes a function (as parameter) and runs it twice.
* runTwice(funtion(){console.log(12b)}); => console.log(12b) twice.
* runTwice(add); => console.log(5) twice. */

//we pass a anonymous function to runTwice that logs '12b' to the console
runTwice(function() {
    console.log('12b');
}); //12b, 12b

function runTwice(fn){
    fn()
    fn()
};

runTwice(add) //5, 5


console.log('======== 12c. button with event ========');
//12c.  create a button. When clicking the button, after 1 second, the text inside the button changes to 'finished', use setTimeout() and DOM.


const container = document.querySelector('.event-btn');
const button = document.createElement('button');
button.textContent = 'Start';
container.appendChild(button);

button.addEventListener('click', function(){
    setTimeout(function(){
        button.textContent = 'Finished';
    }, 1000);
});

console.log('======== 12d. button with event ========');
/*12d. Continuing from the previus exercise, modify the button so that when we click it, the text inmmediately changes to 'loading...', and after 1 second, it changes to 'finished'.*/

const container2 = document.querySelector('.event-btn2');
const button2 = document.createElement('button');
button2.textContent = 'start';
container2.appendChild(button2);

button2.addEventListener('click', function(){
    button2.textContent = 'loading...';
    setTimeout(function(){
        button2.textContent = 'finished';
    }, 1000);
});
