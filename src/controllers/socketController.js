const fs = require('fs');
const {exec} = require('child_process')

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
let payloads = 0
// const payloadCalculator = (num, payload) => {
//     const payloadArr = []
//     clients(num, payloadArr)
//     if(payload){
//         console.log(payload)
//         payloads ++
//         console.log(payloads)
//     }
// }
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
            // console.log(clientCount)
            // console.log(clientCount.length)
            payloadCalculator(id, message)
        })
        socket.on('disconnect', roomId => {
            socket.leave(roomId)
        })
    }
}
// output number of unique clients and number of payloads (payloads will be wc -l 'filename')
// exec('')