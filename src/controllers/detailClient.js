const { findClientById } = require('../utils/findClientById')


const detailClient = async (req, res) => {
    const { id } = req.params

    try {
        const clientFound = await findClientById(id)

        res.status(200).json(clientFound)

    } catch (error) {
        return res.status(error.code).json(error.message)
    }

}


module.exports = {
    detailClient
}