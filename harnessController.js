//Run this file with command 'node harnessController.js'
//File permissions may need to be changed for this to execute


const { exec, execFile } = require("child_process");
const _ = require("lodash");


let newId = 12345;
const number = _.range(20);
const outputHandler = (error, stdout, stderr) => {
  console.error(error)
  console.log(stderr)
}

exec(`nodemon`, outputHandler)

number.map(el => {
  exec(`node src/controllers/clientController.js ${el + newId}`,{maxBuffer: 1024 * 1000 * 1000}, outputHandler);
});


setTimeout(()=> {
  number.map(el => {
    exec(`killall node`, outputHandler)
  })
    exec(`killall nodemon`)
}, 1000 * 60 * 60)
