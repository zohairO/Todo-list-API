// This file keeps all the routes relating to tasks and is connected with the controllers
// folder to use its functions 
const express = require('express')
const router = express.Router();

const {
    getAllTasks, 
    getTask, 
    updateTask, 
    createTask, 
    deleteTask
} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router;