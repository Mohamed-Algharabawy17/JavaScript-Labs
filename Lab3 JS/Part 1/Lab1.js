

username = prompt("Enter Your user_name: ");
password = prompt("Enter Your Password: ");


if(username == null || password == null)
{
    alert("You closed the program :)");
}
else if(username == "admin" && password == "421$$")
{
    alert("welcome, Login success :)");
}
else
{
    var message = "Incorrect ";
    if (username !== "admin") 
    {
        message += "username";
    }
    if (username !== "admin" && password !== "421$$") 
    {
        message += " and ";
    }
    if (password !== "421$$") 
    {
        message += "password";
    }
    alert(message);
}
