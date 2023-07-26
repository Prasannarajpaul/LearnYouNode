var http = require('http');
 var bl = require('bl');
 
 var output = [];
 var urls = process.argv.slice(2);
 
 function printData(output) {
    for (var i = 0; i < output.length; i++) {
        console.log(output[i])
    }
 }
 
 function makeRequest(url, index) {
    http.get(url, function (response) {  
        response.pipe(bl(function (err, data) {  
            if (err) {
                return console.error(err)
            }
            
            output[index] = data.toString();
            
            if (output.length == urls.length) {
                printData(output);
            }
            
        }));
    });
 }
 
 for (var i = 0; i < urls.length; i++) {
    makeRequest(urls[i],i);
}


// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {       
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)     
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }