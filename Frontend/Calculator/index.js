let num1, num2;
function getNumbers() {

    num1 = parseInt(document.getElementById("num1").value),
        num2 = parseInt(document.getElementById("num2").value)

}


function add() {
    getNumbers();
    let result = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}
function subtract() {
    getNumbers();
    let result = num1 - num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}
function multiply() {
    getNumbers();
    let result = num1 * num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}
function divide() {
    getNumbers();
    if (num2 === 0) {
        document.getElementById("result").innerHTML = "Error: Division by zero";
        return;
    }
    let result = num1 / num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}
function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "Result: ";
}
console.log("Calculator loaded");