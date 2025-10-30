const noteRepo = require('../repositories/note.repository');

async function listNotes() {
  return noteRepo.getAllNotes();
}

async function addNote(data) {
  if (!data || !data.note || !data.scheduledate) {
    const err = new Error('note and scheduledate are required');
    err.status = 400;
    throw err;
  }

  return noteRepo.createNote(data);
}

async function updateNote(id, data) {
  if (!id) {
    const err = new Error('note id is required');
    err.status = 400;
    throw err;
  }

  if (!data || !data.note || !data.scheduledate) {
    const err = new Error('note and scheduledate are required');
    err.status = 400;
    throw err;
  }

  try {
    return await noteRepo.updateNote(id, data);
  } catch (error) {
    if (error.code === 'P2025') {
      const err = new Error('Note not found');
      err.status = 404;
      throw err;
    }
    throw error;
  }
}

async function deleteNote(id) {
  if (!id) {
    const err = new Error('note id is required');
    err.status = 400;
    throw err;
  }

  try {
    return await noteRepo.deleteNote(id);
  } catch (error) {
    if (error.code === 'P2025') {
      const err = new Error('Note not found');
      err.status = 404;
      throw err;
    }
    throw error;
  }
}

module.exports = { listNotes, addNote, updateNote, deleteNote };