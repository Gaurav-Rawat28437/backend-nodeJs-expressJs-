const mongoose = require("mongoose")


const taskSchema = new mongoose.Schema({
    title : {
        required : true,
        trim : true,
        minLength : 3,
        maxLength : 20,
        type : String
    },
    desc : {
        required : true,
        trim : true,
        minLength : 10,
        maxLength : 50,
        type : String
    },
    isCompleted : {
        type : Boolean,
        required : true,
        default : false
    }
})


const Task = mongoose.model("task", taskSchema)

module.exports = { Task }