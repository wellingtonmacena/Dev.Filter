const express = require('express')
const routes = require('./routes')

const cors = require('cors')
const app = express()

app.use(express.json())
app.use(routes)
app.use(cors)


const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://well:bta456@simples-suffb.azure.mongodb.net/semana10?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true }
)




app.listen(4001, (req, res, next)=>{
    console.log("Servidor rodando na porta 4001")
})