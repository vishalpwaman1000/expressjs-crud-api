const prisma = require('../prisma/client');

async function getAllNotes() {
  return prisma.noteDetail.findMany({
    orderBy: { createdate: 'desc' },
  });
}

async function createNote(data) {
  return prisma.noteDetail.create({
    data: {
      note: data.note,
      scheduledate: new Date(data.scheduledate),
      createdate: new Date(),
    },
  });
}

async function updateNote(id, data) {
  return prisma.noteDetail.update({
    where: { id },
    data: {
      note: data.note,
      scheduledate: new Date(data.scheduledate),
    },
  });
}

async function deleteNote(id) {
  return prisma.noteDetail.delete({
    where: { id },
  });
}

module.exports = { getAllNotes, createNote, updateNote, deleteNote };