// 412. Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

// Constraints:

// 1 <= n <= 104


let fizzBuzz = function(n) {
    let result = [];

    for(let i = 1; i <= n; i++){

        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz");
        }
        else if (i % 3 === 0){
            result.push("Fizz");
        }
        else if (i % 5 === 0){
            result.push("Buzz");
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
}



 




const testCases = [
  [3, ['1', '2', 'Fizz']],
  [5, ['1', '2', 'Fizz', '4', 'Buzz']],
  [15, [ '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz','Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']]
];


console.log('-------------------- test cases --------------------');



testCases.forEach(([input, expected]) => {
  const result = fizzBuzz(input);

  const passed = result.join(',') === expected.join(',');

  console.log(`Input: ${input} Expected ${expected} | Test Passed: ${passed}`);

    for(let i = 0; i < input; i++){
        if (result.at(i) === expected.at(i)) {
            console.log(`Elements at ${i} is equal`);
        }
    }

});

