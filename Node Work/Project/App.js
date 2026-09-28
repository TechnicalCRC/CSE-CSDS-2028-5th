let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res)=>{
// console.log(req.url, req.method, req.headers);

if(req.url === '/'){
    res.write("<html>");
    res.write("<head> <title> My Users App </title></head>");
    res.write("<body>");
     res.write("<h1>My Users App</h1>");
     res.write("<h1>Insert User's Data:</h1>");
        res.write("<hr>");
     res.write("<form action='/submit-users' method='POST'>");
     res.write('User Name: <input type="text" name="un"> <br><br>')
     res.write('Email Id: <input type="email" name="email"> <br><br>')
     res.write('Password: <input type="text" name="pass"> <br><br>')
     res.write('Gender: <input type="radio" name="gender" value="Male"> Male ')
     res.write(' <input type="radio" name="gender" value="Female"> Female ')
     res.write(' <input type="radio" name="gender" value="Other"> Other <br><br>');
     res.write('<button>Save Record </button> <br><br>')
       
     res.write("</form>");

    res.write("</body>");    
    res.write("</html>");
}
else if(req.url === '/submit-users' && req.method === 'POST'){
  fs.writeFileSync('resFile.txt', 'Data Submitted successfully..');

  res.statusCode = 302;
  res.setHeader('Location', '/');
}

});
let port = process.env.port || 3200; 

server.listen(port,()=>{
    console.log(`Your server started at http://localhost:${port}`);
})