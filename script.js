const keypadNumber = document.querySelectorAll(".main__calculator-keypad-number")
const keypadOperator = document.querySelectorAll(".main__calculator-keypad-operator")
const keypadEquals = document.querySelector("#keypad-equals")
const calculatorText = document.querySelector(".main__calculation-textbox");
const keypadClear = document.querySelector("#keypad-clear")
// let equationStringArr = []
let var1 = ""
let var2 = ""
let var3 = ""
let answer

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

keypadNumber.forEach(item => {item.addEventListener('click', event =>{
    calculatorText.value += item.innerText
    if (var2 !== "") {
      const equationArr = calculatorText.value.split(/[-/*+-]+/);
      var3 = Number(equationArr[1]);
    }
    })
})

keypadOperator.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (var3 !== "") {
        evaluateFunction()
    }
    var2 = item.innerText
    var1 = Number(calculatorText.value);
    calculatorText.value += item.innerText; 
    console.log(var1,var2,var3)
  });
});

const handleEqualsPress = (event) => {
    const equationArr = calculatorText.value.split(/[-/*+-]+/) 
    var3 = Number(equationArr[1])
    console.log(var1,var2,var3)
    evaluateFunction()
    console.log(var2)
}

const handleKeypadClearPress = (event) => {
    calculatorText.value = ""
    var3="";
    var2="";
    var1="";
}


keypadEquals.addEventListener("click", handleEqualsPress)
keypadClear.addEventListener("click", handleKeypadClearPress)