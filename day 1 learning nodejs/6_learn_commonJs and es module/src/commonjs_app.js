
// require("./file2")

// console.log("hello from app.js")

// if we do node src/app.js
// it will import the file1 and file2 in app.js and execute there code

// explaination:
// require("./file1") it import the file and run immediatly,whatever written in file 1 it will wrap on IIFE by node

// IIFE stands for:
// Immediately Invoked Function Expression
// It is a function that is created and executed immediately.

// With an IIFE, we create and call the function at the same time:

// (function () {
//   console.log("Hello Gaurav");
// })();

// Understanding the syntax
// (function () {
//   console.log("Hello");
// })();

// Function expression
// (function () {
//   console.log("Hello");
// })

// The parentheses convert the function into a function expression.

// The last parentheses call the function immediately.

// (function () { ... })();
//                       ↑
//                 Calls the function


// to prevent this 
//  write code in function

console.log("hello ji form common_app.js")
const fn=require("./file1")

// console.log(fn())

// now fn is object
console.log(fn.hello())
console.log(fn.age)