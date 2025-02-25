let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

document.body.addEventListener('keydown', (event) => {
  if (event.key === '1') {
    calculate('1')
  } else if (event.key === '2') {
    calculate('2')
  } else if (event.key === '3') {
    calculate('3')
  } else if (event.key === '4') {
    calculate('4')
  } else if (event.key === '5') {
    calculate('5')
  } else if (event.key === '6') {
    calculate('6')
  } else if (event.key === '7') {
    calculate('7')
  } else if (event.key === '8') {
    calculate('8')
  } else if (event.key === '9') {
    calculate('9')
  } else if (event.key === '.') {
    calculate('.')
  } else if (event.key === '+') {
    calculate('+')
  } else if (event.key === '-') {
    calculate('-')
  } else if (event.key === '*') {
    calculate('*')
  } else if (event.key === '/') {
    calculate('/')
  } else if (event.key === '=') {
    totalCalc()
  } else if (event.key === 'c') {
    clearCalc()
  }
})

function calculate(value) {
  calculation += value;
  console.log(calculation);
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}


function displayCalculation() {
  document.getElementById('message').value = calculation;
}

function totalCalc() {
  calculation = eval(calculation)
  document.getElementById('message').value = calculation;
  localStorage.setItem('calculation', calculation);
}

function clearCalc() {
  calculation = '';
  document.getElementById('message').value = calculation;
  localStorage.setItem('calculation', calculation);
}