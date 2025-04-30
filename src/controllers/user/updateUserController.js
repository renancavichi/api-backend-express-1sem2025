import { update, userValidator } from "../../models/userModel.js"

export default async function(req, res, next) {
    try{
        const { id } = req.params
        const user = req.body
        user.id = +id

        const { success, error, data } = userValidator(user, {pass: true})

        if(!success){
            return res.status(400).json({
                message: "Erro ao editar usuário!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await update(data.id, user)

        if(!result){
            return res.status(404).json({
                error: 'Usuário não encontrado'
            })
        }

        return res.json({
            message: "Usuário atualizado com sucesso",
            user: result
        })
    } catch(error){
        next(error)
    }
}