const keypadNumber = document.querySelectorAll(".main__calculator-keypad-number")
const keypadOperator = document.querySelectorAll(".main__calculator-keypad-operator")
const keypadEquals = document.querySelector("#keypad-equals")

const calculatorText = document.querySelector(".main__calculation-textbox");

// let equationStringArr = []
let var1 = ""
let var2 = ""
let var3 = ""
let answer



keypadNumber.forEach(item => {item.addEventListener('click', event =>{
    calculatorText.value += item.innerText
    // equationStringArr.push(Number(item.innerText))
    // console.log(equationStringArr)
    })
})

keypadOperator.forEach((item) => {
  item.addEventListener("click", (event) => {
    var2 = item.innerText
    var1 = Number(calculatorText.value);
    calculatorText.value += item.innerText;
    console.log(var1)
  });
});

const handleEqualsPress = (event) => {
    const equationArr = calculatorText.value.split(/[-/*+-]+/) 
    var3 = Number(equationArr[1])
    console.log(var1,var2,var3)
    if (var2 == '*') {
        calculatorText.value = var1*var3
    } else if (var2  == '/') {
        calculatorText.value = var1/var3;
    } else if (var2  == '-') {
        calculatorText.value = var1 - var3;
    } else if (var2  == '+') {
        calculatorText.value = var1 + var3;
    } 
    console.log(var2)
}


keypadEquals.addEventListener("click", handleEqualsPress)







// could let var2 be the operator, operators only get sent to that so will be overwritten. Only 


// const equation = "42 * 5"

// equationArr = equation.split(" ")

// console.log(equationArr)

// let answer = 0

// for(i=0; i<equationArr.length; i++) {
//     if (equationArr[i] = "*") {
//         let answer = Number(equationArr[i-1])*Number(equationArr[i+1])
//         return answer
//     }
//     console.log(answer)
// }

// console.log(answer)


// essentially need to write a parser

// could make the calculator include spaces before and after operators. Then split at spaces, forming an array of alternating number and operator strings.

// I can then create a for loop that iterates through the array and performs operation accordingly.

// store first element in var1, check second element, store in var2, store third element in var3. If var2 = *, var1*var3 etc. You could have a runningtotalvar just like reduce! In order to perform an equation we must have all the currently relevant numbers and operators stored. It would be difficult to implement order of operations going step by step. You would have to have all the operators and numbers stored. Could try to implement order of operations, maybe no include brackets or exponentation. so dmas

// How to implement order of operations?

// Could use an indexof for loop to find the index of / and * operators. Then we can