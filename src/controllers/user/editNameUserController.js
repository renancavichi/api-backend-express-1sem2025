import { updateName, userValidator } from "../../models/userModel.js"

export default async function(req, res, next) {
    try{
        const { id } = req.params
        const {name} = req.body

        const user = {
            id: +id,
            name: name
        }

        const {success, error, data} = userValidator(user, {email: true, pass: true})

        if(!success){
            return res.status(400).json({
                message: "Erro ao editar nome do usuário!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await updateName(data.id, data.name)

        if(!result){
            return res.status(404).json({
                error: 'Usuário não encontrado'
            })
        }

        return res.json({
            message: "Nome do usuário atualizado com sucesso",
            user: result
        })
    } catch(error){
        next(error)
    }
}