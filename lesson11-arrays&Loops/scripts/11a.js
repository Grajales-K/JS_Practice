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

console.log('======== agetLastValue() ========');

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

// 11c. Create a function arraySWAP(arr) that takes and array and return an array where the firts and last values are swapped or switched: [1, 20, 22, 24, 5 ] => [5, 20, 22, 24, 1]
console.log('======== 11c. arraySwap() ========');

function arraySwap(arr) {
  if (arr.length > 2) {
    const firstValue = arr[0];
    const lastValue = arr[arr.length - 1];

    // slice the array to get the middle values
    const newArr = arr.slice(1, arr.length - 1);

    console.log([lastValue, ...newArr, firstValue]);
    return [lastValue, ...newArr, firstValue];
  }
}

const test5 = arraySwap([1, 20, 22, 24, 5]);

const printEle = document.querySelector('.reverseEle');

printEle.innerHTML = `<p><strong>original array: [1, 20, 22, 24, 5] =>  [${test5.join(
  ', '
)}]</strong></p>`;

// 11d. Create a for loop that counts up from 0 to 10, but counts up by 2 (0, 2, 4, 6, 8, 10).
console.log('======== 11d. for loop ========');
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 11f. Do exercises 11d and 11e, but using a while loops.
console.log('======== 11f While loops ========');

let i = 0;

while (i <= 10) {
  console.log(i);
  i += 2;
}

let k = 5;

while (k >= 0) {
  console.log(k, 'k');
  k--;
}

// 11e.  Create a for loop that counts down from 5 to 0.
console.log('======== for loop decrement ========');
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1. [1, 2, 3] => [2, 3, 4]
console.log('======== for loop ++ ========');

const arrNum = [1, 2, 3, 4, 5];

let newNumb = [];

for (let i = 0; i < arrNum.length; i += 1) {
  newNumb.push(arrNum[i] + 1);
}
console.log(newNumb);



console.log('======== Funtion ++ ========');
// 11h. Create a function addOne(arr) that takes an array of numbers and returns a new array where each number is increased by 1. [1, 2, 3] => [2, 3, 4]

const arrNumers = [-2, -1, 0, 99, 5];
let doubleArr = [];

function addOne(arrNum) {
  for (let i = 0; i < arrNum.length; i++) {
    doubleArr.push(arrNum[i] + 1);
  }

  return doubleArr;
}

console.log(addOne(arrNumers));
