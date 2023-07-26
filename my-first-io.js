const fs = require('fs')
const path=process.argv[2]
const buf=fs.readFileSync(path)//returns a buffer
const str=buf.toString()
const result = str.split('\n');
console.log(result.length-1);

// const fs = require('fs')

// const contents = fs.readFileSync(process.argv[2]) 
// const lines = contents.toString().split('\n').length - 1
// console.log(lines)