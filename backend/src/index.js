const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require("http")
const {setupWebsocket} = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://well:bta456@simples-suffb.azure.mongodb.net/semana10?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true }
)

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(4001, (req, res, next)=>{
    console.log("Servidor rodando na porta 4001")
})