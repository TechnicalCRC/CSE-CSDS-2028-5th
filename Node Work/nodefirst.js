let http = require('http')
let fs = require('fs');

let server = http.createServer((req, res)=>{
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
    res.write('<head> <title> My First Web Page </title> </head>');
    res.write('<Body>');

   if(req.url === '/')
   {
  res.statusCode = 200;
 let data = fs.readFileSync('home.html');
    res.write(data);
    
    res.write('</Body>');
  res.write('</html>');
  res.end();
}
   else if(req.url === '/about')
   {
  res.statusCode = 200;
    res.write('<h1> My About Page Heading</h1>');
      res.write('<p> Heading for About Page Heading');
      res.write('<h2> My About Page Heading</h2>');

    res.write('</Body>');
  res.write('</html>');
  res.end();
    }
    else if(req.url === '/contact')
   {
  res.statusCode = 200;
    res.write('<h1> My Contact Page Heading</h1>');
      res.write('<p> Heading for Contact Page Heading');
      res.write('<h2> Email : web@gmail.com <br> Contact : 988677575</h2>');
      
    res.write('</Body>');
  res.write('</html>');
  res.end();
   }
   else
   {
      res.statusCode = 404;
      res.write('<h1> Error Page Heading</h1>');
      res.write('<p> 404 error Page Heading');
      res.write('<h2> Page Not Fount 404</h2>');
   
    res.write('</Body>');
  res.write('</html>');
  res.end();
    }

    
  //process.exit(); // to break event loop
});
let port = process.env.port || 3060;
server.listen(port,()=>{
    console.log(`Your server started at http://localhost:${port}`);
})

