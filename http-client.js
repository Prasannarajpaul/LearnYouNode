const {error} = require('console')
var http = require('http');
var url= process.argv[2]

http.get(url, function(response){
    response.setEncoding('utf8')

    response.on(error,function(err){
        console.error(err);
    })
    response.on('data',function(data){
        console.log(data);
    })
})

// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)      
//   response.on('error', console.error)   
// }).on('error', console.error)
