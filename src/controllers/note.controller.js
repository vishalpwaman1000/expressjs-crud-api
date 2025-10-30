const noteService = require('../services/note.service');

async function getNotes(req, res, next) {
  try {
    const notes = await noteService.listNotes();
    res.json(notes);
  } catch (err) {
    next(err);
  }
}

async function createNote(req, res, next) {
  try {
    const newNote = await noteService.addNote(req.body);
    res.status(201).json(newNote);
  } catch (err) {
    next(err);
  }
}

async function updateNote(req, res, next) {
  try {
    const updatedNote = await noteService.updateNote(req.params.id, req.body);
    res.json(updatedNote);
  } catch (err) {
    next(err);
  }
}

async function deleteNote(req, res, next) {
  try {
    await noteService.deleteNote(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = { getNotes, createNote, updateNote, deleteNote };