const keypadNumber = document.querySelectorAll(".main__calculator-keypad-number")
const keypadOperator = document.querySelectorAll(".main__calculator-keypad-operator")
const keypadEquals = document.querySelector("#keypad-equals")
const calculatorText = document.querySelector(".main__calculation-textbox");
const keypadClear = document.querySelector("#keypad-clear")
const keypadNegative = document.querySelector("#negative-button");
// Created 4 variables. They represent the presence of a non-operator negative sign, the first number, operator and second number respectively.
let negativeSign = ""
let numOne = ""
let operator = ""
let numTwo = ""
let answer


// A function that performs the relevant operation and outputs it to the calculator screen.
const evaluateFunction = () => {
    if (operator == "*") {
      calculatorText.value = numOne * numTwo;
    } else if (operator == "/") {
      calculatorText.value = numOne / numTwo;
    } else if (operator == "-") {
      calculatorText.value = numOne - numTwo;
      console.log(negativeSign)
    } else if (operator == "+") {
      calculatorText.value = numOne + numTwo;
    } 
    operator = ""
}
// Outputs a buttons number to the screen upon pressing.
// In the event that an operator is already present it stores the second number in var3.
keypadNumber.forEach(item => {item.addEventListener('click', event =>{
    calculatorText.value += item.innerText
    if (operator !== "") {
      const equationArr = calculatorText.value.split(/[-/*+-]+/);
      numTwo = Number(equationArr[1]);
    }
    })
})
// If an operator is already present this function will call the evaluate function
// It also stores the selected operator in var2 and stores the first number in var1.
keypadOperator.forEach((item) => {
  item.addEventListener("click", (event) => {
    
    if (numTwo !== "") {
        evaluateFunction()
    }
    
    operator = item.innerText
    calculatorText.value += item.innerText;
    

    if (calculatorText.value.split(/[-/*+-]+/)[0] == "") {
      numOne = -Number(calculatorText.value.split(/[-/*+-]+/)[1]);
    } else {
      numOne = Number(calculatorText.value.split(/[-/*+-]+/)[0])
    };
     console.log(numOne)
     console.log(numTwo)

    if (negativeSign == "-" && numOne !== "" && numTwo == "") {
      numOne = numOne*-1
    } else if (negativeSign == "-" && numOne !== "" && numTwo !== "") {
      numTwo = numTwo*-1
    }
      negativeSign = "";
  });

  console.log(numOne)
});

const handleNegativePress = (event) => {
  if (numOne == "" && numTwo == "") {
    negativeSign = "-";
    console.log(negativeSign)
  }
};

// Stores second number in var3 and calls the evaluate function
const handleEqualsPress = (event) => {

  const equationArr = calculatorText.value.split(/[-/*+-]+/);

  if (calculatorText.value.split(/[-/*+-]+/)[0] == "") {
    numTwo = Number(equationArr[2]);
  } else {
    numTwo = Number(equationArr[1]);
  }
  
  console.log(equationArr);
  
  evaluateFunction();
};;
// Clears the calculator. 
const handleKeypadClearPress = (event) => {
    calculatorText.value = ""
    negativeSign = "";
    numTwo="";
    operator="";
    numOne="";
}

keypadEquals.addEventListener("click", handleEqualsPress)
keypadClear.addEventListener("click", handleKeypadClearPress)
keypadNegative.addEventListener("click", handleNegativePress)