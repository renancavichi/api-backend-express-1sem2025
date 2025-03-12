import { updateName } from "../../models/userModel.js"

export default async function(req, res) {
    const { id } = req.params
    const {name} = req.body

    const result = await updateName(+id, name)

    if(!result){
        return res.status(404).json({
            error: 'Usuário não encontrado'
        })
    }

    return res.json({
        message: "Nome do usuário atualizado com sucesso",
        user: result
    })
}