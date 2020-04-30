
const express = require('express')
const kodersRouter = require('./routes/koder')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')
const app = express()

app.use(express.json())

// montamos  el router dekoders.
app.use('/koders', kodersRouter)

app.use('/mentors', mentorsRouter)

app.use('/auth', authRouter)

// // todos los recurso en las rutas se escriben en plural
// app.get('/koders', async (request, response) => {
//   const allkoders = await koders.getAlls()
//   response.json({
//     message: 'All koders',
//     data: {
//       koders: allkoders
//     }
//   })
// })

// mismo recurso
// GET  /Koders
// POST /koders
// PATCH /Koders/:id
//  DELETE /Koders/:id

// router yo lo  puedo montar en la ruta que quiera.
// router se montara /koders
// GET / -> /koders
// POST / -> /Koders

module.exports = app
