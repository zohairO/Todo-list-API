const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
    // only these specified properties will be passed onto the database
    
})
module.exports = mongoose.model('Task', TaskSchema)