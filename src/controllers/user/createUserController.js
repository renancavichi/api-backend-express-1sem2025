import { create, userValidator } from "../../models/userModel.js"

export default async function (req, res){
    const user = req.body
    
    //TODO: Validar os dados do usuário
    const { success, error, data } = userValidator(user, {id: true})

    if(!success){
        return res.status(400).json({
            message: "Erro ao validar os dados do usuário!",
            errors: error.flatten().fieldErrors
        })
    }

    const result = await create(data)

    if(!result){
        return res.status(500).json({
            message: "Erro ao criar usuário!"
        })
    }

    delete result.pass

    return res.status(201).json({
        message: "Usuário criado com sucesso!",
        user: result
    })
}