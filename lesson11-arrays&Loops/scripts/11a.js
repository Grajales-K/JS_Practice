// 11a. create an arrays [10, 20, 30] and modify the last value to 99

const numsArray = [10, 20, 30];

// to be able to print the original array and the modified array, we can use the join() method to convert the array to a string. 
const originalArr = numsArray.join(', '); // "10, 20, 30"

numsArray[numsArray.length - 1] = 99;

const newArr = numsArray.join(', '); // "10, 20, 99"

document.querySelector('.numbers').innerHTML = `
    <p><strong>original Array:</strong> [${originalArr}]</p>
    <p><strong>new Array:</strong> [${newArr}]</p>
`;