const mongoose = require('mongoose');


// using mongoose to connect to Mongo

const connectDB = (url) => {
    return mongoose
    .connect(url,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,    })
};

module.exports = connectDB;

