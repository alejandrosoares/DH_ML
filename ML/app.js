const express = require('express')
const path = require('path')
const {templatePath} = require('./helpers/templatePath')
const log = console.log
const publicPath = path.resolve(__dirname, 'public')
const app = express()

app.use(express.static(publicPath))


app.listen(3000, () => {
    log('Servidor corriendo en puerto 3000')
})

app.get('/', (req, res) => {
    res.sendFile(templatePath('home.html'))
})