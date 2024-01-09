

// Ex:
/*
function Welcome(hello)
{
    console.log(`Welcome: ${hello}`);
  
    function person(name) {
      console.log(`Greeting person: ${hello} ${name}`);
    }
  
    return person;
}
  
var closureExample = Welcome("Hello");
closureExample(prompt("Enter your name"));
*/
  

// Explanation:

// 1- Welcome Function
// It takes a parameter hello and logs a welcome message with the provided hello parameter.

// 2- person Function
// This function is defined inside the Welcome function. It takes a name parameter and logs a greeting message, 
// incorporating both the hello parameter from the outer function and the name parameter from its own scope.

// 3- Closure Creation 
// When we call Welcome("Hello"), it returns the person function. At this point, a closure is formed. 
// The person function retains access to the hello parameter of its outer lexical environment, 
// even after the Welcome function has finished executing.

// 4- Storing Closure in closureExample
// We store the returned person function in the variable closureExample.

// 5- User Input and Closure Invocation
// We prompt the user to enter their name (prompt("Enter your name")). 
// We then invoke closureExample (which is the person function) with the user-inputted name. 
// The closure allows the person function to still have access to the hello parameter from the outer lexical environment.

//----------------------------------------------------------------------------------------------------------------------------------

// --> Closure Concept:

// A closure is created when an inner function has access to the variables of its outer function, 
// even after the outer function has completed execution.
// In this example, the person function forms a closure because it retains access to the hello parameter from the Welcome function.