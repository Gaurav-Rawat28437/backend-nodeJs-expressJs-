const express =require("express")
const { v4: uuid } = require("uuid")
const cors=require("cors")


const app=express()
app.use(express.json())
app.use(cors())


let todo=[]


app.get("/todo",(req,res)=>{
    try{
        
        res.status(200).json(todo)
    }
    catch(error)
    {
        res.status(500).json({"error":error,"msg":error.message})
    }
})


app.post("/todo",(req,res)=>{
    try{

        const {title,desc}=req.body

        if(!title || !desc)
        {
            throw new Error("didn't get title and desc")
        }
        todo.push({title,desc,id:uuid()})
    
        res.status(201).json({msg:"successfully added",data:todo})
    }
    catch(error){
         res.status(500).json({"error":error,"msg":error.message})
    }

})

app.delete("/todo/:id",(req,res)=>{
    try{
        const {id}=req.params
        if(!id)
        {
            throw new Error("didn't get id")
        }
    
        const oldLength = todo.length
    
        todo=todo.filter(item=>{
            return item.id!==id
        })
        
    
        if(todo.length === oldLength){
            return res.status(404).json({msg:"Todo not found"})
        }
    
        res.status(200).json({msg:"successfully deleted",data:todo})
    }
    catch(error){
         res.status(500).json({"error":error,"msg":error.message})
    }

})

app.patch("/todo/:id",(req,res)=>{
    try{

        const {title,desc}=req.body
        const {id}=req.params
    
        if(!title || !desc || !id)
        {
            throw new Error("cannot get title ,desc or id, maybe somethings is missing")
        }

        const exist=todo.find(item=>item.id===id)
        if(!exist)
        {
            return res.status(404).json("todo not found")
        }
        todo=todo.map(item=>{
            if(item.id===id)
            {
                item.title=title
                item.desc=desc
                return item
            }
            else{
                return item
            }
        })

        res.status(200).json({msg:"successfully update",data:todo})

    }
    catch(error){
         res.status(500).json({"error":error,"msg":error.message})
    }
    


})



app.listen(8080,()=>{
    console.log("express server running for TODO....")
})