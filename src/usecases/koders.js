const Koder = require('../models/koder')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema.

function getAll () {
  return Koder.find()
}

function create (koderData) {
  return Koder.create(koderData)
}

// async function create (koderData){
//     const newKoder = new Koder(koderData)
//     const koderCreated = await newKoder.save()
//     return koderCreated
// }

function deleteById (id) {
  return Koder.findByIdAndRemove(id)
}

function updateById (id, newKoderData) {
  return Koder.findByIdAndUpdate(id, newKoderData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
