import { getById } from "../../models/userModel.js"

export default async function getUserController(req, res, next) {
    try{
        const { id } = req.params

        const user = {id: +id}
        const {success, error, data} = userValidator(user, {name: true, email: true, pass: true})
        
        if(!success){
            return res.status(400).json({
                message: "Erro ao buscar usuário!",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await getById(data.id)

        if(!result){
            return res.status(404).json({
                error: 'Usuário não encontrado'
            })
        }

        return res.json({
            message: "Usuário encontrado com sucesso",
            user: result
        })
    } catch(error){
        next(error)
    }
}