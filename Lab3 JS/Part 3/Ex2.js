
// 1- push()
// Description: Adds one or more elements to the end of an array.

// ex:

/*
var fruits = ["apple", "orange"];
fruits.push("banana", "grape");
console.log(fruits);
*/

//-------------------------------------------------------------------------------------------------------------------

// 2- pop()
// Description: Removes the last element from an array and returns that element.

// ex:

/*
var fruits = ["apple", "orange", "banana"];
var removedFruit = fruits.pop();
console.log(removedFruit);  
console.log(fruits);  
*/

//-------------------------------------------------------------------------------------------------------------------

// 3- shift()
// Description: Removes the first element from an array and returns that element.

// ex:

/*
var fruits = ["apple", "orange", "banana"];
var removedFruit = fruits.shift();
console.log(removedFruit);  
console.log(fruits); 
*/

//-------------------------------------------------------------------------------------------------------------------

// 4- unshift()
// Description: Adds one or more elements to the beginning of an array.

// ex:

/*
var fruits = ["orange", "banana"];
fruits.unshift("apple", "grape");
console.log(fruits);
*/

//-------------------------------------------------------------------------------------------------------------------

// 5- slice()
// Description: Returns a shallow copy of a portion of an array into a new array.

// ex:

/*
var numbers = [1, 2, 3, 4, 5];
var slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); 
*/

//-------------------------------------------------------------------------------------------------------------------

// 6- splice()
// Description: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

// ex:

/*
var numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 6, 7);
console.log(numbers);
*/

//-------------------------------------------------------------------------------------------------------------------

// 7- concat()
// Description: Returns a new array that combines two or more arrays.

// ex:

/*
var arr1 = [1, 2];
var arr2 = [3, 4];
var combinedArray = arr1.concat(arr2);
console.log(combinedArray);  
*/

//-------------------------------------------------------------------------------------------------------------------

// 8- indexOf()
// Description: Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// ex:

/*
var fruits = ["apple", "orange", "banana"];
var index = fruits.indexOf('orange');
console.log(index);
*/

//-------------------------------------------------------------------------------------------------------------------

// 9- reverse()
// Description: Reverses the elements of an array in place.

// ex:

/*
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);
*/

//-------------------------------------------------------------------------------------------------------------------

// 10- forEach()
// Description: Executes a provided function once for each array element.

// ex:

/*
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2));
*/

//-------------------------------------------------------------------------------------------------------------------