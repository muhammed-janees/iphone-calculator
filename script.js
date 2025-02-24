let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function calculate(value){
  calculation += value;
  console.log(calculation);
  displayCalculation();

  localStorage.setItem('calculation',calculation);
}


function displayCalculation(){
  document.getElementById('message').value = calculation;
}