import { update } from "../../models/userModel.js"

export default async function(req, res) {
    const { id } = req.params
    const user = req.body

    const result = await update(+id, user)

    if(!result){
        return res.status(404).json({
            error: 'Usuário não encontrado'
        })
    }

    return res.json({
        message: "Usuário atualizado com sucesso",
        user: result
    })
}