const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('task manager App')
})

app.use('/api/v1/tasks', tasks)




// app.get('api/v1/tasks')               - get all the tasks

// app.post('api/v1/tasks')              - post all the new tasks
// app.get('/api/v1/tasks/:id')          - get single task
// app.patch('api/v1/tasks/:id')         - update new task
// app.delete('api/v1/tasks/:id')        - delete a new task


const port = 3000;
app.listen(port, console.log(`Server is listening on port ${port}...`));
//hello 