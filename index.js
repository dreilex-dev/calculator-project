
const add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

const multiply = function(firstNumber, secondNumber){
    return firstNumber * secondNumber;
};

const divide = function(firstNumber, secondNumber){
    if (secondNumber === 0) {
        return "Error: Division by zero";
    }
    return firstNumber / secondNumber;
};


let firstNumber = "";
let operator = "";
let secondNumber = "";
let resultDisplayed = false; 


function operate(operator, firstNumber, secondNumber){
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
        return NaN;
    }

    let result;
    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            return NaN;
    }

    result = parseFloat(result.toFixed(3)).toString();

    return result;
}

const BUTTON_VALUES = {
    clear: "C",
    division: "÷",
    multiply: "x",
    subtract: "-",
    add: "+",
    dot: ".",
    backspace: "<-",
    equal: "=",
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9"
};

const buttons = document.querySelectorAll('.btn');
const displayResult = document.querySelector('.display-result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent.trim(); 
        const constantValue = Object.values(BUTTON_VALUES).includes(buttonValue) ? buttonValue : null;

        if (constantValue !== null) {
            if (!isNaN(constantValue) || constantValue === ".") {
                if (operator === "" || resultDisplayed) {
                    if (resultDisplayed) {
                        firstNumber = constantValue;
                        resultDisplayed = false;
                    } else {
                        firstNumber += constantValue;
                    }
                    displayResult.textContent = firstNumber;
                } else {
                    secondNumber += constantValue;
                    displayResult.textContent = secondNumber;
                }
            } else if (constantValue === BUTTON_VALUES.clear) {
                firstNumber = "";
                operator = "";
                secondNumber = "";
                displayResult.textContent = "0";
                resultDisplayed = false; 
            } else if (constantValue === BUTTON_VALUES.equal) {
                if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
                    const result = operate(operator, firstNumber, secondNumber);
                    displayResult.textContent = result;
                    firstNumber = result.toString();
                    operator = "";
                    secondNumber = "";
                    resultDisplayed = true; 
                }
            } else if (constantValue === BUTTON_VALUES.backspace) {
                if (operator === "" || resultDisplayed) {
                    firstNumber = firstNumber.slice(0, -1) || "0";
                    displayResult.textContent = firstNumber;
                    if (resultDisplayed) {
                        resultDisplayed = false;
                    }
                } else {
                    secondNumber = secondNumber.slice(0, -1) || "0";
                    displayResult.textContent = secondNumber;
                }
            } else {
                if (firstNumber !== "") {
                    if (secondNumber === "") {
                        operator = constantValue === BUTTON_VALUES.multiply ? '*' :
                            constantValue === BUTTON_VALUES.division ? '/' : constantValue;
                    } else {
                        const tempResult = operate(operator, firstNumber, secondNumber);
                        firstNumber = tempResult.toString();
                        operator = constantValue === BUTTON_VALUES.multiply ? '*' :
                            constantValue === BUTTON_VALUES.division ? '/' : constantValue;
                        secondNumber = "";
                        displayResult.textContent = firstNumber;
                    }
                }
            }
        } else {
            console.log(`Button value not found in constants: ${buttonValue}`);
        }
    });
});
