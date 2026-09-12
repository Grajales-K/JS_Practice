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
