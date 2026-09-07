//  ======== toggled buttons ========

function toggle(element) {
  // we want to check if the element has the class 'toggled-on' or 'toggled-off' and toggle it accordingly.
  if (element.classList.contains('toggled-on')) {
    // if it is on, we turn it off
    element.classList.remove('toggled-on');
    element.classList.add('toggled-off');
  } else {
    // if it is off, we turn it on
    element.classList.remove('toggled-off');
    element.classList.add('toggled-on');
  }
}

//  ======== Amazon Calculator ========

//    copy the code from amazon calculator if we type a number less than 0, display a red error message below the texto code. " Error cost cannot be less that $0"

// ====== function to handle keydown event on the input field and trigger the calculation 
function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  const totalCostElement = document.querySelector('.js-total-cost');
  let cost = Number(inputElement.value);

  if(cost <= 0){
    totalCostElement.classList.add('error-message');
    totalCostElement.innerHTML = 'Error: cost cannot be less than $0';
    return;
  }

  totalCostElement.classList.remove('error-message');

  if(cost < 40 ){
    cost = cost + 10;
  }
   
  totalCostElement.innerHTML = `$${cost}`;

}
