const THE_DICTIONARY = {
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'plus': 'plus',
        'four': 4,
        'five': 5,
        'six': 6,
        'minus': 'minus',
        'one': 1,
        'two': 2,
        'three': 3,
        'multiply': 'multiply',
        'decimal': '.',
        'zero': 0,
        'delete': 'delete',
        'divide': 'divide',
        'equals': 'equals',
        'clear': 'clear',
}

function add(a, b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply(a, b){
  return a * b
}

function divide(a, b){
  return a / b 
}

function operate(a, b, func){
  switch (func) {
    case 'add':
      return add(a, b)
    case 'subtract':
      return subtract(a, b)
    case 'multiply':
      return multiply(a, b)
    case 'divide':
      return divide(a, b)
  }
}

function updateScreen(value){
  console.log(value.target.textContent)
  const screen = document.querySelector('.screen')
  screen.innerText = `${screen.innerText}${value.target.textContent}`
}

// Add updateScreen to 0-9 & .
const buttons = document.querySelectorAll('.btn')
for (let i=0; i < buttons.length; i++){
  if (!(isNaN(parseInt(buttons[i].textContent))) || (buttons[i].textContent == '.')) {
    buttons[i].addEventListener('click', updateScreen)
    console.log(buttons[i].textContent)
  }
}
