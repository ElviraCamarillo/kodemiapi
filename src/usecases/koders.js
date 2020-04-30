const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

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

// 1. Validar existencia.
// 2. Crear el hash encriptado del password.
// 3. Crear koder.

async function signup (newKoderData) {
  const { email, password } = newKoderData
  if (!email) throw new Error('Email is requiered')
  if (!password) throw new Error('Password is requiered')
  const koderAlReadyExists = await Koder.findOne({ email })

  // if in  line
  if (koderAlReadyExists) throw new Error('Email  is already registered')
  if (password.length < 6) throw new Error('Password must be 6 character minimum')

  // Crear el  hash
  const hash = await bcrypt.hash(password, 10)

  // Crear el koder
  return Koder.create({ ...newKoderData, password: hash })
}

async function login (email, password) {
  const koder = await Koder.findOne({ email })
  if (!koder) throw new Error('Invalid  Data')

  const isPasswordCorrect = await bcrypt.compare(password, koder.password)
  if (!isPasswordCorrect) throw new Error('Invalid  Data')
  
  return jwt.sign({ id: koder._id }) // token
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  signup,
  login
}
