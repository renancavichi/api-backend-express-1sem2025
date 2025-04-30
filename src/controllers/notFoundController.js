export default function notFoundController (req, res) {
    return res.status(404).json({
        message: "Rota não encontrada!",
    })
}