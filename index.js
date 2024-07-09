const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const multiply = function(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

const divide = function(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

let firstNumber;
let operator;
let secondNumber;

function operate(operator, firstNumber, secondNumber){
    switch(operator){
        case '+':
            return add(firstNumber, secondNumber);
        
        case '-':
            return subtract(firstNumber, secondNumber);

        case '*':
            return multiply(firstNumber, secondNumber);

        case '/':
            return divide(firstNumber, secondNumber);

        default:
            return NaN;
    }
}




module.exports = {
  add,
  subtract,
  multiply,
  divide
};