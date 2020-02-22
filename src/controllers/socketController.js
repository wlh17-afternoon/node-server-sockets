const fs = require('fs');

const clientCount = []
const clients = (num, arr) => {
    const index = arr.findIndex(el => {
        return el === Number(num)
    })
    if(index >= 0){
        return
    } else {
        arr.push(Number(num))
    }
}

module.exports = {
    setSocketListeners: (socket, io) => {
        socket.on('join new room', data => {
            const {message, id} = data
            socket.join(id)
            io.in(id).emit('room joined', data)
            fs.appendFile(`test1/${id}.txt`, message + "\n", (err) => {
                if (err) throw err
                console.log('File Append Successful')
            })
            clients(id, clientCount)
        })
        socket.on('disconnect', roomId => {
            socket.leave(roomId)
        })
    }
}
// output number of unique clients and number of payloads (payloads will be wc -l 'filename')
// exec('')