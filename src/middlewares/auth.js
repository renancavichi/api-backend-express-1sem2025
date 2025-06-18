import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
    // Authorization: Bearer jwrwe8r2749234
    const accessToken = req.headers['authorization']?.split(' ')[1];

    if (!accessToken) {
        return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
    }

    jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido ou expirado.' });
        }

        req.userLogged = decoded; // Armazena os dados do usuário decodificados no objeto de requisição
        next();
    });
}