let dataTest = []

module.exports = {
    setSocketListeners: (socket, io) => {
        socket.on('join new room', data => {
            console.log(data)
            const {message, id} = data
            dataTest.push(message)
            console.log(message, id)
            socket.join(id)
            io.in(id).emit('room joined', data)
            console.log('data right here', dataTest)
        })
        socket.on('disconnect', roomId => {
            socket.leave(roomId)
        })
    }
}
