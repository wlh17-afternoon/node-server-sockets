const io = require("socket.io-client");
const args = process.argv.slice(2);
const _ = require("lodash");
const fs = require('fs');
const {exec} = require('child_process')

 
    
    const data = {
      id: Number(args[0]),
      message: 
          "aplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqoaplwekgiapasleinvpsdlkjasd;flkja;dlfkja;sldkfj;alskdj;lkjianeiofiojhasefiojefaepooipiepwipewriouperwiouperwoipueriuopewriouperwioueiopurewqo"
    };
    const interval = () => {
      socket.emit("join new room", data);
      fs.appendFile(`test2/${data.id}.txt`, data.id + "\n", (err) => {
        if (err) throw err
        console.log('File Append Successful')
    })
    };
    var socket = io.connect("http://localhost:3550");
    setInterval(interval, _.random(2000, 6000));
    setInterval(interval, _.random(2000, 6000));
    setInterval(interval, _.random(2000, 6000));
    setInterval(interval, _.random(2000, 6000));
    
    process.stdin.resume();
    
    // const number = _.range(12345, 12364);
    
    // number.map((el, i) => {
    //   exec(`wc -l test2/${el}.txt`)
    //   console.log(process.argv)
      // console.log(execute)
    //   fs.appendFile(`test2/clientreport.txt`, `${el} : ${execute}` + "\n",(err) => {
    //     if (err) throw err
    //     console.log('File Append Successful')
    // } )
    // })
    
