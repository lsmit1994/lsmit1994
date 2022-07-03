let currentInput = document.getElementById('result');
let myCalculation = document.getElementById('calculation');
const myOperator = document.getElementById('operator');
let myNumbers = document.getElementById('numbers');
let myOperators = document.getElementById('operators');
let previousInput = '';

function onClickNumber(clickedNumber) {
    if (clickedNumber === '.' && currentInput.value.includes('.')) return;
    currentInput.value += clickedNumber;
}

function onClickOperator(clickedOperator) {
    if (currentInput.value === '') {
        myOperator.value = clickedOperator;
        return;
    }

    myOperator.value = clickedOperator;
    previousInput = currentInput.value;
    currentInput.value = '';
}

function compute() {
    let computation;
    let previous = parseFloat(previousInput);
    let current = parseFloat(currentInput.value);
    if (isNaN(previous) || isNaN(current)) return;
    switch (myOperator.value) {
        case '+':
            computation = previous + current;
            break;
        case '-':
            computation = previous - current;
            break;
        case '*':
            computation = previous * current;
            break;
        case '/':
            computation = previous / current;
            break;
        default:
            return;
    }
    myCalculation.value = `${previousInput} ${myOperator.value} ${currentInput.value} =`;  
    currentInput.value = computation;
    myOperator.value = '';
    previous = '';
}

function onClickCancel(clickedCancel) {
    currentInput.value = "";
    myOperator.value = "";
    myCalculation.value = '';
}

function onClickEquals(clickedEquals) {
    compute();
}


