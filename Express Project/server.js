let app = require('./src/app');
let port = 2800;

app.listen(port, ()=>{
    console.log(`Server Started at http://localhost:${port}`);
})