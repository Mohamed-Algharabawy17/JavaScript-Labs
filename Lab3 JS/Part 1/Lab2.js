//---------------------------------- Lab 2 with bonus ---------------------------------------

var result;

while(true)
{
    var num1 = result;
    var num2;
    var operation;

    if (result == undefined) 
    {
        num1 = parseFloat(prompt("Enter first number: "));
    }

    operation = prompt("Enter operation ( * , / , + , - , % ): ");
    num2 = parseFloat(prompt("Enter second number: "));

    if(num1 == null || num2 == null || operation == null)
    {
        alert("You colsed the program :)");
        break;
    }

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
    }
    else
    {
        var result;
        switch (operation) {
            case "+":

                result = num1 + num2;
                break;

            case "*":

                result = num1 * num2;
                break;

            case "-":

                result = num1 - num2;
                break;

            case "/":

                if (num2 != 0) 
                {
                    result = num1 / num2;
                } 
                else 
                {
                    alert("Cannot divide by zero");
                    continue;
                }
                break;

            case "%":

                if (num2 != 0) 
                {
                    result = num1 % num2;
                } 
                else 
                {
                    alert("Cannot calculate modulus with zero");
                    continue;
                }
                break;

            default:
                alert("Invalid operation. Please enter ( * , / , + , - , % )");
                continue;
        }
    
        alert(num1 + " " + operation + " " + num2 + " " + " = " + result);
    }
}

//----------------------------------------------------------------------------------------------

