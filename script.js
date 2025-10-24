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

document.body.addEventListener('keydown', (e) => {
  if (e.key === '=') {
    calculationDisplay.value = eval(calculation);
  } else if (e.key === 'Enter') {
    calculationDisplay.value = eval(calculation);
  } else if (e.key.innerHTML === 'AC') {
    calculation = '';
    calculationDisplay.value = calculation;
  } else if (e.key === 'DEL') {
    calculation = calculation.slice(0, -1);
    calculationDisplay.value = calculation;
  } else if (e.key === 'Backspace') {
    calculation = calculation.slice(0, -1);
    calculationDisplay.value = calculation;
  } else {
    calculation += e.key;
    calculationDisplay.value = calculation;
  }
});
