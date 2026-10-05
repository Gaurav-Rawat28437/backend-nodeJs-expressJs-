// console.log("hello form file 1")
//  to prevent file code run immediatly 
// use function


// we use function of variable because that is not automatically execute code
function hello(){
    return ("hello from file 1")
}

let age=23


// default export form file1

// module.exports = hello
// module.exports=age

//  now which is at last that will export default

// ____________export multiple thing use object__________

module.exports={hello,age}