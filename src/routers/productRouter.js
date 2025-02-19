import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    return res.json({
        message: "Resposta do Router GET /product/"
    })
})

router.post('/', (req, res) => {
    return res.json({
        message: "Resposta do Router POST /product/"
    })
})

router.put('/', (req, res) => {
    return res.json({
        message: "Resposta do Router PUT /product/"
    })
})

router.delete('/', (req, res) => {
    return res.json({
        message: "Resposta do Router DELETE /product/"
    })
})

router.patch('/', (req, res) => {
    return res.json({
        message: "Resposta do Router PATCH /product/"
    })
})


export default router