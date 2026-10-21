let express = require("express");
let bodyParser = require('body-parser');
let bLogic = require('./businessLogic');
let app = express();
let port = 2750;

app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
  res.send(`
        <h1> Insert User's Data </h1>
        <hr>      <a href='/'>Go to Home</a> <br> 
      <a href='/show-users'>Show Record.. </a>
         <hr>
        <form action='/submit-users' method='POST'>
    User Name: <input type="text" name="userName"> <br><br>
    Email Id: <input type="email" name="email"> <br><br>
    Password: <input type="password" name="password"> <br><br>
    Gender: <input type="radio" name="gender" value="Male"> Male 
     <input type="radio" name="gender" value="Female"> Female 
     <input type="radio" name="gender" value="Other"> Other <br><br>
    <button>Save Record </button> <br><br>
    </form>        
        `);
});

app.post('/submit-users',(req,res)=>{
    console.log(req.url, req.method);
    console.log(req.body);
    bLogic.InsertOne(req.body);
    res.send(`Data Inserted Successfully... <br>
      <a href='/'>Go to Home</a> <br> 
      <a href='/show-users'>Show Record.. </a>`);
})

app.get('/show-users',(req, res)=>{
  res.send(`<h1> User Data display here...`)
})

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
