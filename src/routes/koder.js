const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

router.get('/', async (resquest, response) => {
  const allKoders = await koders.getAll()
  response.json({
    message: 'all koders',
    data: {
      koders: allKoders
    }
  })
})

router.post('/', async (request, response) => {
  const newKoder = await koders.create(request.body)
  response.json({
    message: 'koder created',
    data: {
      koder: newKoder
    }
  })
})
module.exports = router
