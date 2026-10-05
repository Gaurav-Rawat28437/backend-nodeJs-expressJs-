// fs means:
// File System
// It is a built-in Node.js module used to work with files and folders on your computer.
// You do not install it using npm.
//    -What can fs do?
//    -Create a file
//    -Read a file
//    -Write into a file
//    -Add content
//    -Rename a file
//    -Delete a file
//    -Create and delete folders


const fs=require("fs")

// console.log(fs)

//---------------create file------------------------------

fs.writeFile("demo1.txt","hello from demo1",()=>{
    console.log("hello from demo1 callback")
}) // this asyncronous so that why it print at last

//if you want to make it sync then :

fs.writeFileSync("demo2.txt","hello from demo2"
)   //this is sync,next line will run only if is complete




//------------read file-----------------------
fs.readFile("demo2.txt", "utf-8", (err, data) => {
  // "utf-8" is a text encoding.
  // It tells Node.js to convert the file's bytes
  // into normal readable text.

  // First parameter: err
  // Contains error information if reading fails.
  // If reading succeeds, err will be null.

  // Second parameter: data
  // Contains the readable file content if reading succeeds.
  // If reading fails, data will usually be undefined.

  if (err) {
    console.log("Error while reading file:", err.message)
    return
  }

  console.log("async File content:", data)
})  // this is also async
const syncReadFileData=fs.readFileSync("demo2.txt","utf-8")

console.log("sync File content:", syncReadFileData)



// -----------------------append data in file-----------------------

fs.appendFile("demo2.txt","\nnow i add something on demo2",()=>{
    console.log("data is append in demo2")
})

fs.appendFileSync("demo2.txt","\nadd 2 line on demo2")


// if file don't exits
// it will create it first then append data
fs.appendFile("demo3.txt","hello from demo3",(err)=>{

     if (err) {
    console.log("Error while append file:", err.message)
    return
     }

  console.log("file appended in demo3")
})




// -------------------- delete file---------------------

fs.unlink("demo3.txt",(err)=>{
     if (err) {
    console.log("Error while delete file:", err.message)
    return
     }

  console.log("file demo3 delete")
})

// if file doesn't exist
fs.unlink("demo5.txt", (err) => {
  if (err) {
    console.log("Error while deleting file:", err.message);
    return;
  }

  console.log("demo5.txt deleted successfully");
});

console.log("hello from app.js")