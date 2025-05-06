import { create, userValidator } from "../../models/userModel.js"
import bcrypt from 'bcrypt'

export default async function signUpController(req, res, next){
    try{
        //recebe os dados do usuário para ser cadastrado
        const user = req.body
        // valida os dados
        const { success, error, data } = userValidator(user, {id: true})

        // se os dados não forem válidos, retorna erro 400
        // e os erros encontrados
        if(!success){
            return res.status(400).json({
                message: "Erro ao validar os dados do usuário!",
                errors: error.flatten().fieldErrors
            })
        }

        data.pass = bcrypt.hashSync(data.pass, 10)

        // se os dados forem válidos, chama a função create do model
        const result = await create(data)

        // se a criação do usuário falhar, retorna erro 500
        if(!result){
            return res.status(500).json({
                message: "Erro ao criar usuário!"
            })
        }
        
        // se a criação do usuário for bem sucedida, retorna o usuário criado
        return res.status(201).json({
            message: "Usuário criado com sucesso!",
            user: result
        })
    } catch(error){
        if(error?.code === "P2002" && error?.meta?.target === "user_email_key"){
            return res.status(400).json({
                message: "Erro ao criar usuário!",
                errors: {
                    email: ["Email já cadastrado!"]
                }
            })
        }

        next(error)
    }
}