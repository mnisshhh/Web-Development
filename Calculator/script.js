function addition() {
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;

    document.getElementById("result").innerHTML = num1 + num2;
}

function sub() {
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;

    document.getElementById("result").innerHTML = num1 - num2;
}

function multiply() {
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;

    document.getElementById("result").innerHTML = num1 * num2;
}

function divide() {
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;

    document.getElementById("result").innerHTML = num1 / num2;
}

function sqrt() {
    num1 = document.getElementById("first_number").value;
    // num2 = document.getElementById("second_number").value;

    document.getElementById("result").innerHTML = Math.sqrt(num1);
}

function pow() {
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;

    document.getElementById("result").innerHTML = Math.pow(num1, num2);
}

function percentage() {
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;

    document.getElementById("result").innerHTML = num1 % num2;
}
