const mongoose = require('mongoose');


const NoteSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, 'must provide a title'],
        trim: true,
        maxlength: [50, 'title must be 50 characters or less']
    },
    date: {
        type: Date,
        default: false
    },
    note: {
        type: String,
        required: [true, 'please provide content'],
        trim: true,

    }
}); 

module.exports = mongoose.model('Note', NoteSchema)