console.log('init')

const inputField = document.getElementById('input_field')
let prevValue
let lastSign


function putNumber(num) {
  inputField.value += num
}

function clearNumbers() {
  inputField.value = ''
  prevValue = null
  lastSign = null
}

function addNumber() {
  prevValue = parseFloat(inputField.value)
  lastSign = '+'
  inputField.value = ''
}

function divideNumber() {
  prevValue = parseFloat(inputField.value)
  lastSign = '/'
  inputField.value = ''
}

function multiplyNumber() {
  prevValue = parseFloat(inputField.value)
  lastSign = '*'
  inputField.value = ''
}

function subtractNumber() {
  prevValue = parseFloat(inputField.value)
  lastSign = '-'
  inputField.value = ''
}

function result() {
  switch(lastSign) {
    case '+': {
      inputField.value = prevValue + parseFloat(inputField.value)
      break
    }
    case '/': {
      inputField.value = prevValue / parseFloat(inputField.value)
      break
    }
    case '*': {
      inputField.value = prevValue * parseFloat(inputField.value)
      break
    }
    case '-': {
      inputField.value = prevValue - parseFloat(inputField.value)
      break
    }
  }
}
