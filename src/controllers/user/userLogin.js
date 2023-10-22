const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findUserByEmail = require('../../utils/checkFunctions/checkUser/findUserByEmail');

const userLogin = async (req, res) => {
  const { email, senha } = req.body
  try {
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