const button = document.querySelectorAll('button');
const calculationDisplay = document.querySelector('.calculation-display');

let calculation = '';

button.forEach((buttonElement) => {
  buttonElement.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      calculationDisplay.value = eval(calculation);
    } else if (e.target.innerHTML === 'AC') {
      calculation = '';
      calculationDisplay.value = calculation;
    } else if (e.target.innerHTML === 'DEL') {
      calculation = calculation.slice(0, -1);
      calculationDisplay.value = calculation;
    } else {
      calculation += e.target.innerHTML;
      calculationDisplay.value = calculation;
    }
  });
});
