// This file handles all the express functions we need in our routes themselves
const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks: tasks })
    } catch (err) {
        res.status(500).json({msg: err})
    }
}

const createTask =  async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})

    } catch (err) {
        res.status(500).json({msg: err})
    }
}

const getTask = async (req, res) => {
    const taskID = req.params.id
    try {
        const task = await Task.findOne({_id: taskID})
        if(!task) {
            // return is important here as js will just send the other res.status if 
            // there is no return here 
            return res.status(404).json({msg: `No task with id ${taskID}`})
        }
        res.status(200).json({task})
    } catch (err) { 
        // id has the wrong syntax
        res.status(500).json({msg: err})
    }
}

const updateTask =  async (req, res) => {

    const taskID = req.params.id
    try {
        const task = await Task.findOneAndUpdate({ _id: taskID}, req.body, 
            {new: true, runValidators: true})
        if(!task) {
            return res.status(404).json({msg: `No task with id ${taskID}`})
        }
    
    } catch (err) {
        res.status(500).json({msg: err})
    }
    res.status(200).json({
        id: taskID,
        data: req.body
    })
}

const deleteTask = async (req, res) => {
    //res.send('delete task')
    const taskID = req.params.id
    try {
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task) {
            return res.status(404).json({msg: `No task with id ${taskID}`});
        }
        res.status(200).json({task})

    } catch (err) {
        res.status(500).json({msg: err})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}