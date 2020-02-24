const fs = require("fs");

if (!fs.existsSync("serverFiles")) {
  fs.mkdirSync("serverFiles");
}
module.exports = {
  setSocketListeners: (socket, io) => {
    socket.on("join new room", data => {
      const { message, id, page, device } = data;
      fs.appendFile(
        `serverFiles/client_${id}-${device}.txt`,
        page + "\n",
        err => {
          if (err) throw err;
        }
      );
    });
    socket.on("disconnect", roomId => {
      socket.leave(roomId);
    });
  }
};
