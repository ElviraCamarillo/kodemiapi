
const express = require('express')

const kodersRouter = require('./routes/koder')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')
// const authMiddleware = require('./middlewares/auth')

// Creando la línea de producción (servidor)
const app = express()

// Middleware
// Parsea cada request a json,sólo en caso de que contenga
// el header 'content-type' con el valorr  'aplicatio/json'
// toma el body y lo transforma en un json que nos lo entrega
//  el objeto request.body
app.use(express.json())

// middleware  global
app.use((request, response, next) => {
  console.log(`>[${request.method}] ${request.url} body:${JSON.stringify(request.body)}`)
  console.log('Middleware in app')
  next()
})

// app.use(authMiddleware) -> No se ejecuta lafunción porque sólo la estamos pasando

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
