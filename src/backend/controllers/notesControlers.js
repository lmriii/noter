// getting mongoose schema for our db
const Note = require('../models/Notes');

const getAllNotes = async (req, res, next) => {
    try {
        const notes = await Note.find({});
        res.status(200).json({ notes });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

const createNote = async (req, res, next) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).json({ note });
    } catch (error) {
        res.status(500).json({ message: error })
    }
};

const getNote = async (req, res, next) => {
    try {
        const { id: noteID } = req.params;
        const note = await Note.findOne({ _id: noteID });
        if (!note) {
            return res.status(404).json({ message: `No note with ID ${noteID} found` });
        }
        res.status(200).json({ note });
    } catch (error) {
        res.status(500).json({ message: error });
    }

};

const updateNote = async (req, res, next) => {
    try {
        const { id: noteID } = req.params;
        const note = await Note.findOneAndUpdate({ _id: noteID }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!note) {
            return res.status(404).json({ message: `No note with ID of ${noteID} found` });
        }
        res.status(200).json({ note });
    } catch (error) {

    }


};

const deleteNote = async (req, res, next) => {
    try {
        const { id: noteID } = req.params;
        const note = await Note.findOneAndDelete({ _id: noteID });
        if (!note) {
            return res.status(404).json({ message: `No note with ID of ${note} found` });
        }
        res.status(200).json({ message: `Successfully deleted` });
    } catch (error) {

    }

};



module.exports = {
    getAllNotes,
    createNote,
    getNote,
    updateNote,
    deleteNote
};