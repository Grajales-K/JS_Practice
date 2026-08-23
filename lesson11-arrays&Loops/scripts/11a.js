// 11a. create an arrays [10, 20, 30] and modify the last value to 99

const numsArray = [10, 20, 30];

// to be able to print the original array and the modified array, we can use the join() method to convert the array to a string. 
const originalArr = numsArray.join(', '); // "10, 20, 30"

numsArray[numsArray.length - 1] = 99;

const newArr = numsArray.join(', '); // "10, 20, 99"

document.querySelector('.numbers').innerHTML = `
    <p><strong>original Array: </strong> [${originalArr}]</p>
    <p><strong>new Array:</strong> [${newArr}]</p>
`;


// 11b  create a functions getLastValue(arr) that takes and array and returns the last value in the array.

function getLastValue(arr) {
    // if the array is empty, return undefined
  if (arr.length === 0) return undefined;
  return arr[arr.length - 1];
}

//identify the element where we want to insert the results of the function calls
const funArrContainer = document.querySelector('.funArr');

// call the function with different arrays and store the results in variables
const test1 = getLastValue(numsArray); // 99
const test2 = getLastValue([1, 2, 3, 4, 5]); // 5
const test3 = getLastValue([1, 20, 22, 24, 5]); // 5
const test4 = getLastValue(['hi', 'hello', 'good']); // "good"

//now we can print the results in our html element
funArrContainer.innerHTML = `
  <p><strong>The last value of numsArray:</strong> ${test1}</p>
  <p><strong>The last value of  [1..5]:</strong> ${test2}</p>
  <p><strong>The last value of  [1, 20, 22, 24, 5]:</strong> ${test3}</p>
  <p><strong>The last value of  ['hi', 'hello', 'good']:</strong> ${test4}</p>
`;

