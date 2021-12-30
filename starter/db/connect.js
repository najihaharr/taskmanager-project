const mongoose = require('mongoose')


const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true, //not require to initialize this if using V6
    })
}

module.exports = connectDB