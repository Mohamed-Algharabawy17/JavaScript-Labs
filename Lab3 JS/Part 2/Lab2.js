
var contacts = [];

while(true)
{
    
    var operation = prompt("Enter operation ( add, search ): ");

    if(operation == null)
    {
        alert("You closed the program :)");
        break;
    }

    if(operation != "add" && operation != "search")
    {
        alert("Invalid input!, Please enter ( add or search )");
        continue;
    }

    switch(operation.toLowerCase())
    {
        case "add":
            var username = prompt("Enter your name: ");
            var phone = prompt("Enter your phone number: ");
            if( !username || !phone)
            {
                alert("Invalid input!, Cannot add the contact!");
                continue;
            }
            
            var contact = {
                uname: username, 
                pnumber : phone,
            };

            contacts.push(contact);
            // console.log(contacts);

            break;

        case "search" :
            var searchVal = prompt("Enter Query to search: ");

            if( !searchVal )
            {
                alert("Invalid search value!");
                continue;
            }

            var foundContact = contacts.find(contact => 
                contact.uname.includes(searchVal) || contact.pnumber.toString().includes(searchVal)
            );

            if (foundContact) 
            {
                var message = "Contact found :)\nName: " + foundContact.uname + "\nPhone: " + foundContact.pnumber;
                alert(message);
            } 
            else 
            {
                alert("No contacts found!");
            }
            
            break;
    }
}
