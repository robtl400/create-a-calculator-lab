let calculationHistory = [];

// Function for addition
function add(num1, num2) {
  let result = num1 + num2;
  addToHistory(num1, num2, '+', result);
  return result;
}

// Function for subtraction
function subtract(num1, num2) {
  let result = num1 - num2;
  addToHistory(num1, num2, '-', result);
  return result;
}

// Function for multiplication
function multiply(num1, num2) {
  let result = num1 * num2;
  addToHistory(num1, num2, '*', result);
  return result;
}

// Function for division
function divide(num1, num2) {
  let result = num1 / num2;
  addToHistory(num1, num2, '/', result);
  return result;
}

// Function to add to history
function addToHistory(operand1, operand2, operator, result) {
  let calculation = {
    operand1: operand1,
    operand2: operand2,
    operator: operator,
    result: result
  };
  calculationHistory.push(calculation);
}

// Function to display calculation history
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("No stored calculations.");
  } else {
    console.log("Calculation History:");
    for (let i = 0; i < calculationHistory.length; i++) {
      let calc = calculationHistory[i];
      console.log(calc.operand1 + " " + calc.operator + " " + calc.operand2 + " = " + calc.result);
    }
  }
}

console.log("To use the calculator, run functions.")
console.log("Example calculations below: ")
// Example usage
console.log("5 + 3 = " + add(5, 3));
console.log("10 - 4 = " + subtract(10, 4));
console.log("6 * 7 = " + multiply(6, 7));
console.log("20 / 5 = " + divide(20, 5));

// Display the history
displayHistory();