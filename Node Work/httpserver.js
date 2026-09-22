let http = require('http')
let count = 0;
let server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.header);
  count++;
  console.log("This is ending the request....." + count);
  //process.exit(); // to break event loop
});
let port = process.env.port || 3050;
server.listen(port,()=>{
    console.log(`Your server started at http://localhost:${port}`);
})

