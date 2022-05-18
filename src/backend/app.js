

const express = require('express');
const app = express();
const notes = require('./controllers/routes/notes');
const connectDB = require('./db/connect');
require('dotenv').config();


// middleware
app.use(express.static('../../public/notes.html'))
app.use(express.json());
 

// routes

app.use('/api/v1/notes', notes);

const port = 4050;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}


start();



