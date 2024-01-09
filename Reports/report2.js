
// 1- find Method
// The find method is used to retrieve the first element in an array that satisfies a provided testing function.

// ex:

/*
var arr = [1, 2, 3, 4, 5];
var found = arr.find((num) => num > 2);
console.log(found);
*/

// Explanation:
// In this example, the find method is used to find the first element greater than 2 in the arr array

//-------------------------------------------------------------------------------------------------------------------------

// 2- forEach Method
// The forEach method executes a provided function once for each array element.

// ex:

/*
var colors = ["red", "green", "blue"];
colors.forEach((color, index) => {
  console.log(`Color at index ${index}: ${color}`);
});
*/

// Explanation:
// The forEach method is used to iterate over each element in the colors array and log information about each color

//-------------------------------------------------------------------------------------------------------------------------

// 3- map Method
// The map method creates a new array populated with the results of calling a provided function on every element in the array.

//ex:

/*
var arr = [1, 2, 3, 4, 5];
var squaredNumbers = arr.map((num) => num * num);
console.log(squaredNumbers);
*/

// Explanation:
// In this example, the map method is used to create a new array (squaredNumbers) 
// where each element is the square of the corresponding element in the arr array