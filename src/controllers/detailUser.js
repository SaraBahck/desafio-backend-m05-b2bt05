const detailUser = async (req, res) => {
    try {

        const { id, nome, email } = req.user
        res.status(200).json({ id, nome, email })

    } catch (error) {
        console.log(error.message);
        res.status(404).json({ mensagem: `o servidor não pode encontrar o recurso solicitado.` })
    
    }
}

module.exports = {
    detailUser
}