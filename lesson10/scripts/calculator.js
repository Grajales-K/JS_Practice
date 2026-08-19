let calculation = '';

// Display the current calculation in the display id concatenating the new value to the existing calculation
function updateCalculation(value) {
  calculation += value;
  displayCalculation();
}

function displayCalculation() {
  document.getElementById('display').innerText = calculation;
  console.log(calculation);
}
