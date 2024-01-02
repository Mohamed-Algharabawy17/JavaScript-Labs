function convertHour() 
{

    while(true)
    {
        let hour = prompt("Enter an hour: ");
        
        if(hour == null)
        {
            alert("You closed the program :)");
            break;
        }

        if (hour < 0 || hour > 23 || isNaN(hour)) 
        {
            return "Invalid input";
        }
    
        if (hour == 0) 
        {
            alert("12 AM");
        } 
        else if (hour <= 11) 
        {
            alert(`${hour} AM`);
        } 
        else if (hour == 12) 
        {
            alert("12 PM");
        } 
        else 
        {
            alert(`${hour - 12} PM`);
        }
    }
}

convertHour();