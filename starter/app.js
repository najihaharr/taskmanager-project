const connectDB = require('./db/connect')
const express = require('express')
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config()
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler')

// middleware
app.use(express.static('./public')) //this is the html css code
app.use(express.json())

// routes path
// app.get('/hello', (req,res) => {
//     res.send('Task Manager App')
// })

// routes : {{URL}}/task etc
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    
    } catch (error) {
        console.log(error)
    }
}

start()

