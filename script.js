const screen = document.querySelector('.screen')
const operands = []
let operator = null

function checkOperands(){
  // check if operands are ready for operation
  if (operands.length > 1) {
    if (Boolean(operator)) {
      return true
    }
  }
  return false
  }

function add(arr){
  console.log(arr, '1')
  let b = arr.pop()
  console.log(arr, '2')
  let a = arr.pop()
  console.log(arr, '3')
  return a + b
}

function subtract(arr){
  let b = arr.pop()
  let a = arr.pop()
  return a - b
}

function multiply(arr){
  let b = arr.pop()
  let a = arr.pop()
  return a * b
}

function divide(arr){
  let b = arr.pop()
  let a = arr.pop()
  return a / b
}
  

function operate(arr, func){
  console.log([arr, func, 'operate'])
  switch (func) {
    case 'add':
      return add(arr)
    case 'minus':
      return subtract(arr)
    case 'multiply':
      return multiply(arr)
    case 'divide':
      return divide(arr)
  }
}

function equals(){
  operands.push(grabValue())
  if (checkOperands()){
    total = operate(operands, operator)
    console.log(total)
    operator = null
    clearScreen()
    screen.innerText = `${total}`.slice(0,12)
  }
}

function pressOperator(e){
  let key = e.target.id
  if (checkOperands()){
    equals()
    operator = key
  } else if (!checkOperands()) {
    operands.push(grabValue())
    operator = key
    clearScreen()
  } else {
    operate(operands, operator)
    operator = key
  } 
}


function clearScreen(){
  screen.innerText = ''
}

function clearCalc(){
  clearScreen()
  operands.length = 0
  operator = null
}


function grabValue(){
  return parseFloat(screen.innerText)
}


function deleteLast(){
  if (screen.innerText){
    screen.innerText = screen.innerText.substring(0, screen.innerText.length - 1)
  }
}


function updateScreen(e){
  // gets text from pressed button, checks length of content in screen, checks for decimal, if all's well adds selection to screen.
  let value = e.target.textContent

  if (screen.innerText.length > 11) {
    return
  }

  if (screen.innerText.includes(".") && value == "."){
    return
  }

  screen.innerText = `${screen.innerText}${value}`
}


// adding Event Listeners to the buttons
const buttons = document.querySelectorAll('.btn')
// 0-9 and .
for (let i=0; i < buttons.length; i++){
  if (!(isNaN(parseInt(buttons[i].textContent))) || (buttons[i].textContent == '.')) {
    buttons[i].addEventListener('click', updateScreen)
  }
  switch(buttons[i].id) {
      // the balance
    case 'add':
    case 'minus':
    case 'multiply':
    case 'divide':
      buttons[i].addEventListener('click', pressOperator)
      break;
    case 'delete':
      buttons[i].addEventListener('click', deleteLast)
      break;
    case 'equals':
      buttons[i].addEventListener('click', equals)
      break;
    case 'clear':
      buttons[i].addEventListener('click', clearCalc)
      break;

  }
}



