function Status()
{
    while (true) 
    {
        let usrAge = prompt("Enter your age: ");
    
        if (usrAge == null) 
        {
            alert("You closed the program :)");
            break; 
        }

        let age = parseInt(usrAge);
        if (isNaN(age) || age <= 0) 
        {
            alert(`Age must be valid and ${typeof(age)}`);
            continue;
        }
        else
        {
            let status;
            if (age >= 1 && age <= 10) 
            {
                status = "Child";
            } 
            else if (age >= 11 && age <= 18) 
            {
                status = "Teenager";
            } 
            else if (age >= 19 && age <= 50) 
            {
                status = "Grown up";
            } 
            else 
            {
                status = "Old";
            }
            alert(`Your age is ${age}, You are a ${status}`);
        }    
    }
}

Status();