const jwt = require('jsonwebtoken')
const knex = require('../dbConnection')

const authentication = async (req, res, next) => {
  const { authorization } = req.headers

  try {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw {
        code: 401,
        message: 'Para acessar este recurso um token de autenticação válido deve ser enviado.'
      }
    }

    const token = authorization.split(' ')[1]

    let idToken
    
    try {
      const { id } = jwt.verify(token, process.env.HASH_PASS)
      idToken = id
    } catch (jwtError) {
      if (jwtError.name === 'JsonWebTokenError' || jwtError.name === 'TokenExpiredError') {
        throw {
          code: 401,
          message: 'Para acessar este recurso um token de autenticação válido deve ser enviado.'
        }
      }
    }
    
    const loggedUser = await knex('usuarios').where({ id: idToken })
    

    if (loggedUser.length === 0) {
        throw {
          code: 404,
          message: 'Usuário não encontrado'
        }
    }

    const { senha: _, ...user } = loggedUser[0]

    req.user = user

    next()

  } catch (error) {
    return res.status(error.code).json({ message: error.message })
  }
}

module.exports = authentication