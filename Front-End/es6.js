/**
 * Created by Hadi on 2020.
 */

// ECMA SCRIPT SHEETS CHEAT  

/**
 * New features in ES6: let and const 
 * var: 
 *  - Function scope
 *  - Can be redeclared
 * const: 
 *  - Block scope, used for constant values
 *  - Cannot be redeclared
 * let: 
 *  - Block scope
 *  - Cannot be redeclared
 */

// 1. Arrow function example:
let newFunc = () => { 
    return 'something here'; 
};

var oldFunc = function() { 
    return 'something here'; 
};

// 2. Multiline strings using backticks (``):
const name = 'Hadi'; 
let message = `Here is 
               a message 
               spanning multiple lines, ${name}`; // Prints the const value

// 3. Default parameter values in functions:
function test(param1 = 'default value') {
    return `Function called with ${param1}`;
}

// Example of using the arrow function with default parameters
let arrowFunc = (param1 = 'default value') => {
    return `Arrow function called with ${param1}`;
};

// Important new functions in ES6:

// Object.freeze: Makes an object constant (immutable)
const obj = { key: 'value' };
Object.freeze(obj); // obj cannot be modified now

// String functions:
// startsWith(): Checks if the string starts with a given substring
const str1 = 'Hello, world!';
console.log(str1.startsWith('Hello')); // true

// endsWith(): Checks if the string ends with a given substring
console.log(str1.endsWith('world!')); // true

// includes(): Checks if the string contains a given substring
console.log(str1.includes('world')); // true

// repeat(): Repeats the string a specified number of times
console.log('abc'.repeat(3)); // 'abcabcabc'

// Set (ES6 feature for creating unique collections of values):
let uniqueSet = new Set(['a', 'b', 'a', 'c']);
console.log(uniqueSet); // Set { 'a', 'b', 'c' }

// Add an element to a Set
uniqueSet.add('d');
console.log(uniqueSet); // Set { 'a', 'b', 'c', 'd' }

// Delete an element from a Set
uniqueSet.delete('b');
console.log(uniqueSet); // Set { 'a', 'c', 'd' }

// Clear all elements from a Set
uniqueSet.clear();
console.log(uniqueSet); // Set { }
