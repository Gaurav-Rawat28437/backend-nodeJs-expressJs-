// taking input in node

// in node there is process it give info about node ,it is obj
// console.log(process)

// in process obj there is argv which is array
// process.argv is used to take input from the terminal while starting a Node.js program.
// console.log(process.argv)  // it give an array, process.argv[0] → Path of Node.js; process.argv[1] → Path of your JavaScript file

// taking input in node we can use this 
console.log(process.argv) 
// when we do node src/app.js 10 20 it will take input and store in that argv array in string 
let arr=process.argv.slice(2)
// console.log(arr)
let sum=arr[0] + arr[1]
console.log(sum)
