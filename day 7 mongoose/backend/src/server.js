// Mongoose is a Node.js library (ODM) that helps your Express application communicate with MongoDB.




require("dotenv").config()
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const {Task}=require("./models/TaskModule")
app.use(express.json())
const cors = require("cors")

app.use(cors())
const PORT=process.env.PORT || 8080


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("database connected...")

    app.listen(PORT,()=>{
        console.log(`server connect on port ${PORT}`)
    })
})
.catch(()=>{
    console.log("database connection failed...")
})


app.post("/todos", async(req, res) => {
    try {
        const{title, desc,} = req.body
        const newTask = await Task.insertOne({title, desc,})
        res.status(201).json(newTask)
        
    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})

app.get("/todos", async(req, res) => {
    try {
        
        const allTasks = await Task.find()
        res.status(200).json(allTasks)
        
    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})


app.get("/todos/:id", async(req, res) => {
    try {
        const {id}=req.params
        
        const foundtask = await Task.findById(id)
        
        if(!foundtask)
        {
            throw new Error("incorrect id task not found")
        }

        res.status(200).json(foundtask)

    } catch (error) {

        res.status(400).json({
            err: error.message
        })

    }
})

app.patch("/todos/:id", async(req, res) => {
    try {
        const {title,desc,isCompleted}=req.body
        const {id}=req.params

        

    //    lamba kaam

    const foundTask = await Task.findById(id)
    if(!foundTask)
    {
        return res.status(404).json({
            msg: "Task not found"
        })
    }
    foundTask.title=title
    foundTask.desc=desc
    foundTask.save()
    res.status(200).json(foundTask)
    



        // const updatedTask = await Task.findByIdAndUpdate(id,{title,desc},{returnDocument:"after",runValidators:true})

        // if(!updatedTask)
        // {
        //     return res.status(404).json({
        //         msg: "Task not found"
        //     })
        // }
        // res.status(200).json(updatedTask)

    } catch (error) {

        res.status(400).json({
            err: error.message
        })

    }
})

app.patch("/todos/isCompleted/:id", async(req, res) => {
    try {
        console.log(req)
        const {isCompleted}=req.query
        
        const {id}=req.params

    const foundTask = await Task.findById(id)
    if(!foundTask)
    {
        return res.status(404).json({
            msg: "Task not found"
        })
    }

    
    foundTask.isCompleted=isCompleted
    foundTask.save()
    console.log(foundTask)
    res.status(200).json(foundTask)


    } catch (error) {

        res.status(400).json({
            err: error.message
        })

    }
})


app.delete("/todos/:id",async(res,req)=>{
    try {
        const {id}=req.params
        const deleteTask=await Task.findByIdAndDelete(id)
        res.status(204).json(deleteTask)

        
    } 
    catch (error) {
        res.status(400).json({
            err: error.message
        })
    }
})