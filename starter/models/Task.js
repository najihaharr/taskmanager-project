const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    //key and schema types
    name: {
        type:String,
        required:[true, 'Must provide a Name'],
        trim:true,
        maxlength:[100, 'Name cannot be more than 100 characters'],
    }, 
    completed: {
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('Task', TaskSchema)