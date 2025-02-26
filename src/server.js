// importacao do express
// const express = require('express')
import express from 'express'

import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

// cria o objeto app que tem todas as funções do express
const app = express()

// criando a rota get no endereço / (raiz: http://localhost:3000/) 
app.get('/', (req, res) => {
    return res.json({
        message: "Bem-vindo a API!"
    })
})

app.use('/user', userRouter)
app.use('/product', productRouter)

// sobe o servidor e fica ouvindo as rotas criadas anteriormente
app.listen(3000, () => {
    console.log('Servirdor Rodando no http://localhost:3000')
})