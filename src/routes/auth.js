const express = require('express')

const koders = require('../usecases/koders')

const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await koders.login(email, password)

    response.json({
      sucess: true,
      message: 'loged in',
      data: {
        token
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      sucess: false,
      error: error.message
    })
  }
})

module.exports = router
