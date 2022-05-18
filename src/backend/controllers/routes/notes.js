const express = require('express');
const router = express.Router();

const { getAllNotes, createNote, getNote, updateNote, deleteNote } = require('../notesControlers');

router.route('/').get(getAllNotes).post(createNote);
router.route('/:id').get(getNote).patch(updateNote).delete(deleteNote);


module.exports = router;