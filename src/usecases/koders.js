const Koder = require('../models/koder')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema.

async function getAll () {
  const allKoders = await Koder.find()
  return allKoders
}

async function create (koderData) {
  const koderCreated = await Koder.create(koderData)
  return koderCreated
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
