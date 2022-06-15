const express = require("express")
const app = express()
app.get('/', (req, res)=>{
    console.log('Peticion recibida')

    res.status(200).send("hola mundo con nodemn")
})

app.listen(4000, ()=>{
    console.log('Servidor escuchando en el puerto 4000')
})