const folder = process.argv[2]
const ext = process.argv[3]      
const mod=require('./mymodule')
// console.log(list)

mod(folder, ext, callback);
function callback(err, list) {
  if (err) {
      console.error('Error:', err);
      return;
  }
  list.forEach(element => {
    console.log(element);
  });
}

// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })