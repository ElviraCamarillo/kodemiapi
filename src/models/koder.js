const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  generation: {
    type: Number,
    required: true,
    min: 1
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// module.export -> sirve paradecir lo que queremos que el script exporte
// sólo se puede exportar una sóla cosa

module.exports = mongoose.model('koders', koderSchema)
