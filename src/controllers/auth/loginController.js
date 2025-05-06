import { userValidator, getByEmail } from "../../models/userModel.js"
import bcrypt from 'bcrypt'

export default async function loginController(req, res, next){
    try{
        const user = req.body
        const { success, error, data } = userValidator(user, {id: true, name: true, avatar: true})

        if(!success){
            return res.status(400).json({
                message: "Erro ao validar os dados do login!",
                errors: error.flatten().fieldErrors
            })
        }

        // busca o usuário no banco de dados pelo email
        const result = await getByEmail(data.email)

        // Se o usuário não for encontrado pelo email, retorna um erro
        if(!result){
            return res.status(400).json({
                message: "Usuário ou senha inválidos! (Usuario não encontrado)",
            })
        }

        // verifica se a senha do login confere com o hash da senha do banco de dados
        const passIsValid = bcrypt.compareSync(data.pass, result.pass)

        // se a senha não confere, retorna um erro
        if(!passIsValid){
            return res.status(400).json({
                message: "Usuário ou senha inválidos! (Senha não confere)",
            })
        }

        //... continua na próxima aula criar o accesssToken e o refreshToken
        
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