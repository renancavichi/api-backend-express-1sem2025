import { remove } from "../../models/userModel.js"

export default async function(req, res) {
    const { id } = req.params

    const result = await remove(+id)

    if(!result){
        return res.status(404).json({
            error: 'Usuário não encontrado'
        })
    }

    return res.json({
        message: "Usuário deletado com sucesso",
        user: result
    })
}