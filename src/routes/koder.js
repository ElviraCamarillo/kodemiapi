const express = require('express')

const koders = require('../usecases/koders')

const router = express.Router()

router.get('/', async (resquest, response) => {
  try {
    const allKoders = await koders.getAll()
    response.json({
      success: true,
      message: 'All koders',
      data: {
        koders: allKoders
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newKoder = await koders.create(request.body)
    response.json({
      success: true,
      message: 'Koder created',
      data: {
        koder: newKoder
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderDeleted = await koders.deleteById(id)
    response.json({
      success: true,
      message: `koder with id ${id} deleted`,
      data: {
        koder: koderDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderUpdated = await koders.updateById(id, request.body)
    response.json({
      success: true,
      message: `Koder with  is ${id} updated`,
      data: {
        koder: koderUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

// signup -> registro
router.post('/signup', async (request, response) => {
  try {
    const newKoder = await koders.signup(request.body)
    response.json({
      success: true,
      message: 'Koder  registered',
      data: {
        koder: newKoder
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
