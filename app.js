const express = require("express")
require("dotenv").config()

const app = express()

app.get('/', (req, res)=>{
    console.log('Peticion recibida')

    res.status(200).send("hola mundo con nodemn")
})

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})