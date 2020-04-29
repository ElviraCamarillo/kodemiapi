const Mentor = require('../models/mentors')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema.

async function getAll () {
  const allMentors = await Mentor.find()
  return allMentors
}

async function create (mentorData) {
  const mentorCreated = await Mentor.create(mentorData)
  return mentorCreated
}

// async function create (koderData){
//     const newKoder = new Koder(koderData)
//     const koderCreated = await newKoder.save()
//     return koderCreated
// }

module.exports = {
  getAll,
  create
}
