import { create } from "../../models/userModel.js"

export default async function (req, res){
    const user = req.body
    
    //TODO: Validar os dados do usuário
    const result = await create(user)

    if(!result){
        return res.status(500).json({
            message: "Erro ao criar usuário!"
        })
    }

    delete result.pass

    return res.json({
        message: "Usuário criado com sucesso!",
        user: result
    })
}