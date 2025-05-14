import { remove } from "../../models/sessionModel.js"
import jwt from "jsonwebtoken"

const logoutController = async (req, res, next) => {
    try{
        let refreshToken = req?.body?.refreshToken
        refreshToken = refreshToken || req?.cookies?.refreshToken
        if (!refreshToken) {
            return res.status.json({ message: "Você já está deslogado!" })
        }
        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET)
        // remover session from database
        await remove(decoded.sessionId, decoded.id)
        return res.json({ message: "Logout realizado com sucesso!"})
    } catch (error) {
        console.log(error.name)
        console.log(error.message)
        if (error.name === "JsonWebTokenError" && error.message === "invalid token") {
            return res.status(401).json({ message: "Token inválido!" })
        }
        if (error.name === "JsonWebTokenError" && error.message === "invalid signature") {
            return res.status(401).json({ message: "Assinatura do Token inválida!" })
        }
        if (error.name === "TokenExpiredError" && error.message === "jwt expired") {
            return res.status(401).json({ message: "Token Expirado!" })
        }
        next(error)
    }
}

export default logoutController