const { log } = require('console');
let fs = require('fs');

// fs.readFile('file1.txt','utf-8',(err, data)=>{
//   console.log(err)
//   console.log(data)
// })

// let data = fs.readFileSync('file1.txt')
// console.log(data.toString());

// fs.writeFile('file2.txt','File 2 data writing here in ABESIT',(err)=>{
//   console.log(err);
// })

let data = fs.writeFileSync('file2.txt', 'Data writing in NodeJs session....');
console.log(data);

console.log("File reading is end here....")
console.log("File reading is end here....")
console.log("File reading is end here....")
console.log("File reading is end here....")
