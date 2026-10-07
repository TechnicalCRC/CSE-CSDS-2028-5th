let express = require('express');
let app = express();
let port = process.env.port || 2600;


app.use('/',(req, res, next)=>{
console.log('My first Middleware Process...',req.url, req.method);
// res.send("My Root Responses here...1 hello");
 next(); 
});

app.use('/about',(req, res, next)=>{
console.log('My second Middleware Process...', req.url, req.method);
next();
});

app.use('/',(req, res, next)=>{
console.log('My third Middleware Process...',req.url, req.method);
    next();  
})

app.get("/",(req, res)=>{
    console.log(req.url, req.method);
    res.send('<h1> My First GET Response... </h1>')
})

app.listen(port,()=>{
 console.log(`Server Started at http://localhost:${port}`);   
});