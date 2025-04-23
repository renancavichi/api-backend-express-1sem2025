// const express = require('express') <- Exemplo de importação com require, mudamos para "import" no package.json type: "module"
// importacao do pacote express
import express from 'express'

// importacao dos routers
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import { logger } from './middlewares/logger.js'
// importacao do cors
import cors from 'cors'
//import { loggerBody } from './middlewares/loggerBody.js'

// cria o objeto app que tem todas as funções do express
const app = express()

// middleware para liberar o cors do frontend web

app.use(logger)
app.use(cors())
// middleware para o express entender json
app.use(express.json()) // lê o json e grava o objeto no req.body
//app.use(loggerBody)

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