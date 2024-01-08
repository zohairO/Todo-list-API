const express = require('express')
const app = express()
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
// "^5.11.10"
// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)



const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {

    }
}

start();
