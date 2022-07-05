const keypadNumber = document.querySelectorAll(".main__calculator-keypad-number")
const keypadOperator = document.querySelectorAll(".main__calculator-keypad-operator")
const keypadEquals = document.querySelector("#keypad-equals")
const calculatorText = document.querySelector(".main__calculation-textbox");
const keypadClear = document.querySelector("#keypad-clear")
// Created 3 variables. They represent the first number, operator and second number.
let var1 = ""
let var2 = ""
let var3 = ""
let answer
// A function that performs the relevant operation and outputs it to the calculator screen.
function evaluateFunction() {
    if (var2 == "*") {
      calculatorText.value = var1 * var3;
    } else if (var2 == "/") {
      calculatorText.value = var1 / var3;
    } else if (var2 == "-") {
      calculatorText.value = var1 - var3;
    } else if (var2 == "+") {
      calculatorText.value = var1 + var3;
    } 
    var2 = ""
}
// Outputs a buttons number to the screen upon pressing.
// In the event that an operator is already present it stores the second number in var3.
keypadNumber.forEach(item => {item.addEventListener('click', event =>{
    calculatorText.value += item.innerText
    if (var2 !== "") {
      const equationArr = calculatorText.value.split(/[-/*+-]+/);
      var3 = Number(equationArr[1]);
    }
    })
})
// If an operator is already present this function will call the evaluate function
// It also stores the selected operator in var2 and stores the first number in var1.
keypadOperator.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (var3 !== "") {
        evaluateFunction()
    }
    var2 = item.innerText
    var1 = Number(calculatorText.value);
    calculatorText.value += item.innerText; 
  });
});
// Stores second number in var3 and calls the evaluate function
const handleEqualsPress = (event) => {
    const equationArr = calculatorText.value.split(/[-/*+-]+/) 
    var3 = Number(equationArr[1])
    evaluateFunction()
}
// Clears the calculator
const handleKeypadClearPress = (event) => {
    calculatorText.value = ""
    var3="";
    var2="";
    var1="";
}
// Adding of even listeners
keypadEquals.addEventListener("click", handleEqualsPress)
keypadClear.addEventListener("click", handleKeypadClearPress)