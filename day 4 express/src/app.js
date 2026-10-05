const express=require("express")
const port =8080
const app=express()

// just like const server=HTMLOutputElement.createServer((req,res)=>{})
//     HTTP Module
//                  createServer()
//                        │
//                        ▼
//              One Callback Function
//                        │
//         ┌──────────────┼──────────────┐
//         ▼              ▼              ▼
//    if("/")      else if("/about")   else if("/users")

// Everything is handled inside one callback.

// Express
//              Express Router
//                    │
//      ┌─────────────┼──────────────┐
//      ▼             ▼              ▼
// app.get("/")  app.get("/about")  app.get("/users")
//      │             │              │
//      ▼             ▼              ▼
//  Callback 1   Callback 2     Callback 3

// Each route has its own callback.

// In the Node.js http module, every incoming request goes to a single createServer() callback, so we manually check req.url and req.method using if...else to decide the response. 
// In Express, each route (app.get(), app.post(), etc.) has its own callback, and Express automatically matches the URL and HTTP method to the correct route handler.



app.use(express.json())
// express.json() is a built-in Express middleware that parses incoming JSON request bodies and converts them into JavaScript objects,making the data available in req.body. Without it, req.body will usually be undefined for JSON requests.

app.get("/home",(req,res)=>{
    
    // res.cookie("name","gaurav")
    // res.status(200)
    // res.json("home content")
    

    res.cookie("name", "gaurav").status(200).json("home content")

})

app.post("/home",(req,res)=>{

    res.status(201).json("add somethings")

})
app.put("/home",(req,res)=>{

    res.status(200).json("change somethings")

})
app.patch("/home",(req,res)=>{
    
    res.status(200).json("update somethings")

})
app.delete("/home",(req,res)=>{
    
    res.status(200).json("delete somethings")

})

app.post("/body",(req,res)=>{
    
    // const data=req.body
    // console.log(data)

     const {name,age}=req.body
     console.log(name,age)

    

    res.json(`data form body : my name is ${name} and my age is ${age}`)
})


app.get("/param/:id",(req,res)=>{
    const {id}=req.params
    res.json(`data from param : ${id}`)
})

app.get("/query",(req,res)=>{
    const {name,age}=req.query
    res.json(`data from query : ${name} and ${age}`)
})

app.listen(port,()=>{
    console.log(`express server running on ${port}...`)
})

