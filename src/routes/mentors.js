const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

router.get('/', async (resquest, response) => {
  const allMentors = await mentors.getAll()
  response.json({
    message: 'all mentor',
    data: {
      koders: allMentors
    }
  })
})

module.exports = router
