var fs=require('fs')
var path=require('path')
module.exports=function(directory, exact, callback){
  fs.readdir(directory,function(err, files){
    if(err) return callback(err)
    const filteredfile = files.filter(file=>path.extname(file)=="."+exact)
    callback(null,filteredfile)
  })
}

// const fs = require('fs')
// const path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }

