/* This document contains examples of the data types used in JavaScript. */

// Numbers
let length = 5;
let width = 6.5;
let area = length * width;
console.log(area);

// BigInt
let regularNumber = 9007199254740991; // A regular number
let bigIntNumber = BigInt("9007199254740991895"); // A BigInt number

console.log(regularNumber); // Prints: 9007199254740991
console.log(bigIntNumber); // Prints: 9007199254740991895n

// Strings
let firstName = "Jane";
let lastName = "Doe";
console.log(firstName);
console.log(lastName);
console.log(firstName + lastName); // Concatenate strings

// Booleans
let single = true;
let married = false;
console.log(single);
console.log(married);

// Undefined
let childName;
console.log(childName);

// Null
let marriedName = null;
console.log(marriedName);

// Symbols
let aSymbol = Symbol("mysymbol");
console.log(aSymbol);

// Arrays
let exArray = [3, 6, 9];
console.log(exArray);

// Array methods
console.log(exArray.length); // Get array length
exArray.push(12); // Add element at the end
console.log(exArray);
exArray.pop(); // Remove element from the end
console.log(exArray);
console.log(exArray.join(", ")); // Convert array to a string with specified separator

// Maps
let aMap = new Map();
aMap.set('u', '3');
aMap.set('x', '4');
aMap.set('123', 'p');
console.log(aMap.get('123')); // Retrieve value based on key
console.log(aMap.size); // Get map size
aMap.delete('x'); // Delete key and value pair
console.log(aMap.size); // Get updated map size