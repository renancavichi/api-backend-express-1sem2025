export default function(req, res) {
    return res.json({
        message: "Usuário removido com sucesso",
        user: {
            id: 2,
            name: "Maria",
            email: "maria@gmail.com"
        }
    })
}