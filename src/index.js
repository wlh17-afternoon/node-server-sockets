const express = require('express')
const app = express()
const socket = require('socket.io')
const ssl = require('./controllers/socketController')

// app.use(express.json())
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

const io = socket(app.listen(3550, () => console.log('Listening on port 3550')))

io.on('connection', socket => {
    console.log('A new user just connected')
    ssl.setSocketListeners(socket, io)
})






