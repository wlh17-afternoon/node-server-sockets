const io = require("socket.io-client");
const args = process.argv.slice(2);
// console.log(args);
const _ = require("lodash");

 
    
    const data = {
      message: "Hello World",
      id: Number(args[0])
    };
    const interval = () => {
      socket.emit("join new room", data);
      //   console.log("hello");
    };
    var socket = io.connect("http://localhost:3550");
    setInterval(interval, _.random(2000, 6000));
    setInterval(interval, _.random(2000, 6000));
    setInterval(interval, _.random(2000, 6000));
    setInterval(interval, _.random(2000, 6000));
    
    process.stdin.resume();
  
