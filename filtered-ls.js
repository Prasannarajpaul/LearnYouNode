const fs=require('fs')
const path=process.argv[2]
const ext="."+process.argv[3]
fs.readdir(path,(err,list)=>{
    if(err) return err
    const filteredList=list.filter(endswith)
    function endswith(item){
        return  item.endsWith(ext)
    }
    for(let i=0;i<filteredList.length;i++){
    console.log(filteredList[i])
    }
})

//Provided answer
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]      

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)   
//   files.forEach(function (file) {      
//     if (path.extname(file) === ext) {  
//       console.log(file)
//     }
//   })
// })


