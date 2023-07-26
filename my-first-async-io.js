const fs=require('fs')

const buf=fs.readFile(process.argv[2],'utf8',(err,data)=>{
    if(err) return err
    const result = data.split('\n');
    console.log(result.length-1);
})
//call back events
//https://github.com/maxogden/art-of-node#callbacks 

// const fs = require('fs')
// const file = process.argv[2]

// fs.readFile(file, function (err, contents) {      
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) can also be used
//   const lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })