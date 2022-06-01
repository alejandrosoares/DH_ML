const express = require('express')
const path = require('path')
const {templatePath} = require('./helpers/templatePath')
const bodyParser = require('body-parser')
const publicPath = path.resolve(__dirname, 'public')
const app = express()

app.use(express.static(publicPath))
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})

app.get('/', (req, res) => {
    res.sendFile(templatePath('home'))
})

app.get('/login', (req, res) => {
    res.sendFile(templatePath('login'))
})

app.post('/login', (req, res) => {
    log(req.body)
    res.redirect('/')
})

app.get('/register', (req, res) => {
    res.sendFile(templatePath('register'))
})

app.post('/register', (req, res) => {
    res.redirect('/')
})