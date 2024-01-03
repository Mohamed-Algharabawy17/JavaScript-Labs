

while(true)
{
    
    var nums = [];
    var size = prompt("Enter the count of numbers: ")

    if(size == null)
    {
        alert("You closed the program :)");
        break;
    }

    size = parseInt(size);
    
    if (isNaN(size) || size <= 0) 
    {
        alert("Invalid input, Enter an integer number");
        continue;
    }


    for(let i = 0; i < size; i++)
    {
        var num = parseFloat(prompt(`Enter number (${i+1}): `))

        if (isNaN(num)) 
        {
            alert("Invalid input, Please enter a valid number");
            i--;
        } 
        else 
        {
            nums[i] = num;
        } 
    }


    var sum = 0;
    for(let i = 0; i<size; i++)
    {
        sum += nums[i];
    }

    var avg = sum / size;

    alert(`Sum is: ${sum} \nAverage is: ${avg}`);

}

