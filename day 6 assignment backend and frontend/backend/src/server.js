const express=require("express")

const{ v4 : uuidv4 } = require("uuid")


const cors = require("cors")

const server=express()
server.use(cors())
server.use(express.json())

let db=[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 28,
    "city": "New York"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "age": 32,
    "city": "Los Angeles"
  },
  {
    "id": 3,
    "name": "Mike Johnson",
    "email": "mikej@example.com",
    "age": 40,
    "city": "Chicago"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "emilyd@example.com",
    "age": 24,
    "city": "Houston"
  },
  {
    "id": 5,
    "name": "Robert Brown",
    "email": "robertb@example.com",
    "age": 36,
    "city": "Miami"
  },
  {
    "id": 6,
    "name": "Sarah Wilson",
    "email": "sarahw@example.com",
    "age": 29,
    "city": "San Francisco"
  },
  {
    "id": 7,
    "name": "David Lee",
    "email": "davidl@example.com",
    "age": 45,
    "city": "Seattle"
  },
  {
    "id": 8,
    "name": "Jessica Miller",
    "email": "jessicam@example.com",
    "age": 31,
    "city": "Boston"
  },
  {
    "id": 9,
    "name": "William Anderson",
    "email": "williamand@example.com",
    "age": 50,
    "city": "Denver"
  },
  {
    "id": 10,
    "name": "Olivia Martinez",
    "email": "oliviam@example.com",
    "age": 27,
    "city": "Austin"
  }
]

server.get("/users",(req,res)=>{
    try{
        res.json(db)
    }
    catch(error){
        res.json({msg:error.message})
    }
})

server.get("/users/:id", (req, res) => {
    try {
        const { id } = req.params

        const user = db.find(item => item.id == id)

        if (!user) {
            res.status(404).json({
    msg: "User not found"
})
        }

        res.json(user)
    } catch (error) {
        res.json({ msg: error.message })
    }
})

server.post("/users",(req,res)=>{
    
    try{
        const data=req.body
        db.push({...data,"id":uuidv4()})
        res.json(db)
    }
    catch(error){
        res.json({msg:error.message})
    }
})

server.put("/users/:id",(req,res)=>{
    
    try{
       const {id}=req.params
       const data=req.body
        
            db=db.map(item=>{
                if(item.id==id)
                {
                    return {
                            ...data,
                            id: item.id
                        }
                }
                return item
            })
            res.json(db)
        
    }
    catch(error){
        res.json({msg:error.message})
    }
})



server.delete("/users/:id",(req,res)=>{
   try{
       const {id}=req.params
       
        
            db = db.filter(item => item.id != id)
            
            res.json(db)
        
    }
    catch(error){
        res.json({msg:error.message})
    }
})


server.listen(8080,()=>{
    
    console.log("server started on port 8080")

})