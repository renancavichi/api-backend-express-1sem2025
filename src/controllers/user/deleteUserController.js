import { remove, userValidator } from "../../models/userModel.js"

export default async function(req, res, next) {
    try{
        const { id } = req.params

        const user = {id: +id}
        const {success, error, data} = userValidator(user, {name: true, email: true, pass: true})

        if(!success){
            return res.status(400).json({
                message: "Erro ao deletar usuário!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await remove(data.id)

        if(!result){
            return res.status(404).json({
                error: 'Usuário não encontrado'
            })
        }

        return res.json({
            message: "Usuário deletado com sucesso",
            user: result
        })
    } catch(error){
        next(error)
    }
}