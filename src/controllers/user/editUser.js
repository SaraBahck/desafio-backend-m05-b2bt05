const bcrypt = require('bcrypt');
const updatetUserIntoDatabase = require('../../utils/insertFunctions/updateUserIntoDatabase');
const checkEmailToUpdate = require('../../utils/checkFunctions/checkUser/checkUserEmailToUpdate');

const editUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        await checkEmailToUpdate(req, email)

        const encryptedPassword = await bcrypt.hash(senha, 10)

        const user = await updatetUserIntoDatabase(req, nome, email, encryptedPassword)

        return res.status(200).json(user);

    } catch (error) {
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    editUser,
}