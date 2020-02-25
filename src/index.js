const express = require('express')
const app = express()
const socket = require('socket.io')
const ssl = require('./controllers/socketController')


const io = socket(app.listen(3551, () => console.log('Listening on port 3551')))

io.on('connection', socket => {
    // console.log('A new user just connected')
    ssl.setSocketListeners(socket, io)
})






