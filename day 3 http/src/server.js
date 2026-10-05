// now here we gonna make server using express and express is based on http module
// Express is built on top of Node.js's built-in http module.
// Before learning Express, we can create a server using the http module.

const http = require("http");

// createServer() creates an HTTP server.
// It takes a callback function.
// Node.js executes this callback EVERY TIME a client sends a request.


// for fake req
const users = [
  {
    id: 1,
    name: "Gaurav",
    age: 22,
    city: "Delhi",
    profession: "MERN Developer"
  },
  {
    id: 2,
    name: "Rahul",
    age: 24,
    city: "Noida",
    profession: "Frontend Developer"
  },
  {
    id: 3,
    name: "Aman",
    age: 21,
    city: "Jaipur",
    profession: "Backend Developer"
  },
  {
    id: 4,
    name: "Priya",
    age: 23,
    city: "Mumbai",
    profession: "UI/UX Designer"
  },
  {
    id: 5,
    name: "Neha",
    age: 25,
    city: "Bangalore",
    profession: "Full Stack Developer"
  }
];

// const server = http.createServer((req, res) => {

//     // req (Request Object)
//     // Contains information sent by the client.
//     // Example:
//     // req.url      -> Requested URL
//     // req.method   -> HTTP Method (GET, POST, etc.)
//     // req.headers  -> Request Headers

//     // res (Response Object)
//     // Used to send a response back to the client.
//     // Example:
//     // res.write()
//     // res.end()
//     // res.setHeader()

//     // console.log("hello")
//     //The request for the page:
//     // GET /
//     // Another request, commonly:
//     // GET /favicon.icon

//     console.log(req.url)

//     // if you see console.log("hello") twice, it's usually because the browser sent two requests, not because createServer() is executing the callback twice for a single request.
    
//     //  res.writeHead(200,{"content-type" : "text/plain"})
//     // res.end("Hello from Node.js Server")

//     // res.writeHead(200,{"content-type" : "text/html"})
//     // res.end("<h1>hello from nodejs</h1>")



//     if(req.url.toLocaleLowerCase()==="/home")
//     {
//         res.end("this is home response")
//     }
//     else if(req.url.toLocaleLowerCase()==="/about")
//     {
//         res.end("this is about response")
//     }
//     else if(req.url.toLocaleLowerCase()==="/users")
//     {
//         res.writeHead(200,{"Content-Type":"application/json"})
//         res.end(JSON.stringify(users))
//     }
//     else if(req.url.toLocaleLowerCase().includes("/users/"))
//     {
//         const name = req.url.split("/")[2]
//         console.log(name)

//         const foundData=users.find(item=>item.name.toLocaleLowerCase().split(" ").includes(name.toLocaleLowerCase()))
//         foundData?res.end(JSON.stringify(foundData)):res.end("user not found")
//     }
//     else{
//         res.end("page not found")
//     }

// })

// listen() starts the server.
// It tells Node.js to listen for incoming requests on port 8080.

// The callback runs ONLY ONCE,
// after the server has started successfully.

// A port is a logical communication endpoint on a computer.

// It helps the Operating System (OS) decide which application should receive an incoming network request.

// Think of it as a door number for applications running on a computer.

// Real-Life Analogy

// Imagine a big apartment building.

// Apartment Building = Your Computer

// Flat 101 = Chrome
// Flat 102 = Node.js Server
// Flat 103 = MongoDB
// Flat 104 = VS Code Live Server

// If someone comes to the building, they must know the flat number.

// Similarly,

// Computer = Server

// Port Number = Door Number

// The port tells the OS which application should receive the request.


const server2=http.createServer((req,res)=>{

    if(req.url==="/users" && req.method=="GET")
    {
        console.log(JSON.stringify(users))
    }
    else if(req.url==="/users" && req.method=="DELETE")
    {
        users.pop( )
        console.log(JSON.stringify(users))
    }
    else{
        console.log("page not found")
    }
})

// server.listen(8080, () => {
//     console.log("Server running on http://localhost:8080");
// })

server2.listen(8080, () => {
    console.log("Server2 running on http://localhost:8080");
})