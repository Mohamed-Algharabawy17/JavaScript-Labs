// Inheritance in JavaScript using function constructors is based on the prototypal inheritance model. 
// The key idea is to link objects through prototypes, allowing one object to inherit properties and methods from another. 


// * Inheritance in JavaScript using Function Constructors:

// 1. Introduction to Prototypal Inheritance:
// JavaScript uses prototypes to achieve inheritance. Each object has a prototype object, 
// and properties/methods not found on the object itself are looked up in its prototype chain.

// 2. Function Constructors and Prototypes:
// Function Constructors: Function constructors are functions used with the new keyword to create objects. 
// They initialize object properties and methods.
// Prototypes: Functions have a prototype property that can be used to share properties and methods among instances created with that constructor.


// ex:

// function Animal(name) 
// {
//     this.name = name;
// }

// Animal.prototype.sayHello = function() {
//     console.log(`Hello, I'm ${this.name}.`);
// };



// function Dog(name, breed) 
// {
//     Animal.call(this, name);
//     this.breed = breed;
// }


// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//     console.log("Woof! Woof!");
// };



// const myDog = new Dog("Buddy", "Golden Retriever");

// myDog.sayHello();  // Inherited from Animal
// myDog.bark();      // Method specific to Dog