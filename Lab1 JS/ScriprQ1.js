
function getFullName() {

    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");

    var isConfirmed = confirm("Is your full name " + firstName + " " + lastName + "?");

    if (isConfirmed) {

        var birthYear = parseInt(prompt("Enter your birth year: "));

        var currentYear = new Date().getFullYear();
        var age = currentYear - birthYear;

        document.write("Welcome " + firstName + " " + lastName + ", you are " + age + " years old.");
    } else {
        getFullName();
    }
}
getFullName();