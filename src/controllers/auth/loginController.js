import { userValidator, getByEmail } from "../../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

        // dados para guardar no token (payload)
        const payload = {
            id: result.id,
        }

        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' })
        const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3d' })
        
        res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 3 * 24 * 60 * 60 * 1000 }) // 3 dias

        return res.status(200).json({
            message: "Login realizado com sucesso!",
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: {
                id: result.id,
                name: result.name,
                email: result.email,
                avatar: result.avatar
            }
        })
    } catch(error){
        next(error)
    }
}