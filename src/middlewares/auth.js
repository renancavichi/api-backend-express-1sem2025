import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
    // obtem o accessToken que chegou no header Authorization: Bearer jwt_token
    const accessToken = req.headers['authorization']?.split(' ')[1];

    // se não tiver o accessToken, retorna erro
    if (!accessToken) {
        return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
    }

    // verifica se o token é válido
    jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
        // Se o token não for válido ou expirou, retorna erro
        if (err) {
            return res.status(403).json({ message: 'Token inválido ou expirado.' });
        }

        req.userLogged = decoded; // Armazena os dados do usuário decodificados no objeto de requisição
        next();
    });
}