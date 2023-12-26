alert("Welcome to the first release of our calculator :) This version supports summation only");

function sumCalc() {
    
    var firstNumber = parseFloat(prompt("Enter the first number:"));
    var secondNumber = parseFloat(prompt("Enter the second number:"));

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Invalid input. Please enter valid numbers.");
    } else 
    {
        var sum = firstNumber + secondNumber;
        document.write(firstNumber + " + " + secondNumber + " = " + sum);
    }
}

sumCalc();