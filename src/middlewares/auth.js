
const jwt = require('../lib/jwt')

// Verificar que eljwt esexpedido por  el mismo servidor.
function auth (request, response, next) {
  console.log('Auth Middleware')
  const { authorization: token } = request.headers
  console.log('autorization: ', token)

  try {
    const decodedToken = jwt.verify(token)
    console.log('decodedToken: ', decodedToken)
    next()
  } catch (error) {
    response.status(404)
    response.json({
      sucess: false,
      message: 'Unauthorized'
    })
  }
}

module.exports = auth
