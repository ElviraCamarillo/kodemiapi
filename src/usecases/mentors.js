const Mentor = require('../models/mentors')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema.

function getAll () {
  return Mentor.find()
}

function create (mentorData) {
  return Mentor.create(mentorData)
}

function deleteById (id) {
  return Mentor.findByIdAndRemove(id)
}

function updateById (id, newMentorData) {
  return Mentor.findByIdAndUpdate(id, newMentorData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
