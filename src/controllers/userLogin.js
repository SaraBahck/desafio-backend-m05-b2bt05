const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findUserByEmail = require('../utils/findUserByEmail');
const validateUserDataLogin = require('../utils/validateUserDataLogin');


const userLogin = async (req, res) => {
  const { email, senha } = req.body
  try {
    await validateUserDataLogin(email, senha)
    const loggedUser = await findUserByEmail(email)

    const user = loggedUser[0];

    const correctPass = await bcrypt.compare(senha, user.senha);

    if (!correctPass) {
      throw {
        code: 401,
        message: "Senha incorreta."
      }
    }

    const token = jwt.sign({ id: user.id }, process.env.HASH_PASS, { expiresIn: '24h' });

    const { senha: _, ...dataUser } = user;

    return res.status(200).json({
      usuario: dataUser,
      token
    });
  } catch (error) {
    return res.status(error.code).json(error.message);
  }
}

module.exports = {
  userLogin
}