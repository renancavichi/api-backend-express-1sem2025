export default function getUserController(req, res) {
    return res.json({
        message: "Resposta do Router GET /user/"
    })
}