
// 1- Object.keys(obj)
// Description: Returns an array of a given object's own enumerable property names

// ex :

/*
var person = { name: "Mo_Gharabawy", age: 23, city: "Beheira" };
var keys = Object.keys(person);
console.log(keys);
*/

//------------------------------------------------------------------------------------------------------------------------------------------

// 2- Object.values(obj)
// Description: Returns an array of a given object's own enumerable property values

// ex:

/*
var person = { name: "Mo_Gharabawy", age: 23, city: "Beheira" };
var values = Object.values(person);
console.log(values);  
*/

//------------------------------------------------------------------------------------------------------------------------------------------

// 3- Object.freeze(obj)
// Description: Freezes an object, preventing new properties from being added, existing properties from being removed, and values from being changed

// ex:

/*
var person = { name: "Mo_Gharabawy" };
Object.freeze(person);
person.age = 23;  
console.log(person); 
*/

//------------------------------------------------------------------------------------------------------------------------------------------

// 4- Object.hasOwnProperty(prop)
// Description: Returns a boolean indicating whether the object has a property with the specified name as its own property (not inherited)

// ex:

/*
var person = { name: "Mo_Gharabawy" };
console.log(person.hasOwnProperty('name'));  // true
console.log(person.hasOwnProperty('age'));   // false
*/

//------------------------------------------------------------------------------------------------------------------------------------------

// 5- Object.getOwnPropertyNames(obj)
// Description: Returns an array containing the names of all properties (enumerable or not) of the object

// ex:

/*
var person = { name: "Mo_Gharabawy", age: 23 };
var properties = Object.getOwnPropertyNames(person);
console.log(properties);
*/

//------------------------------------------------------------------------------------------------------------------------------------------

// 6- Object.getPrototypeOf(obj)
// Description: Returns the prototype of the specified object

// ex:

/*
var person = { name: "Mo_Gharabawy" };
var prototype = Object.getPrototypeOf(person);
console.log(prototype);  
*/

//------------------------------------------------------------------------------------------------------------------------------------------

// 7- Object.entries(obj)
// Description: Returns an array of a given object's own enumerable property [key, value]

// ex:

/*
var person = { name: "Mo_Gharabawy", age: 23, job: 'Developer' };
var entries = Object.entries(person);
console.log(entries);
*/

//------------------------------------------------------------------------------------------------------------------------------------------

// 8- Object.toString()
// Description: Returns a string representing the object

// ex:

/*
var person = { name: "Mo_Gharabawy", age: 23 };
console.log(person.toString()); 
*/


//------------------------------------------------------------------------------------------------------------------------------------------

// 9- Object.is(obj1, obj2)
// Description: Determines whether two values are the same value

// ex:

/*
var x = 10;
var y = 10;
console.log(Object.is(x, y));  // true
*/


//------------------------------------------------------------------------------------------------------------------------------------------

// 10- Object.defineProperty(obj, prop, descriptor)
// Description: Adds the named property described by a given descriptor to an 

// ex:


/*
var person = {};
Object.defineProperty(person, "name", { 
    value: "mohamed", 
    writable: false // by default false & indicates to user can chamge proprty value or not
});
person.name = "Mo_Gharabawy"; 
console.log(person.name); 
*/

//------------------------------------------------------------------------------------------------------------------------------------------
