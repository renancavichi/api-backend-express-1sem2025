// importacao do express
// const express = require('express')
import express from 'express'

// cria o objeto app que tem todas as funções do express
const app = express()

// criando a rota get no endereço / (raiz: http://localhost:3000/) 
app.get('/', (req, res) => {
    return res.json({
        message: "Chamada a rota GET"
    })
})

app.post('/', (req, res) => {
    return res.json({
        message: "Chamado a rota POST"
    })
})

app.put('/', (req, res) => {
    return res.json({
        message: "Chamado a rota PUT"
    })
})

app.delete('/', (req, res) => {
    return res.json({
        message: "Chamado a rota DELETE"
    })
})

app.patch('/', (req, res) => {
    return res.json({
        message: "Chamado a rota PATCH"
    })
})

app.delete('/user', (req, res) => {
    return res.json({
         message: "Chamado a rota DELETE no Endpoint /user"
    })
})

// sobe o servidor e fica ouvindo as rotas criadas anteriormente
app.listen(3000, () => {
    console.log('Servirdor Rodando no http://localhost:3000')
})