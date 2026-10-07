let express = require("express");
let app = express();
let port = 2500;
let path = require("path");

// app.use('/', express.static(path.join(__dirname,'public')));

//console.log(__dirname);
let myPublicPath = path.join(__dirname, "public");

app.get("/", (req, res) => {
  console.log(req.url, req.method);
  res.sendFile(`${myPublicPath}/index.html`);
});

app.get("/about", (req, res) => {
  console.log(req.url, req.method);
  //  res.sendFile(path.join(__dirname,'about.html'));
  //  res.sendFile(path.join(__dirname, 'public','about.html'));
  res.sendFile(`${myPublicPath}/about.html`);
});

app.get("/contact", (req, res) => {
  console.log(req.url, req.method);
  res.sendFile(`${myPublicPath}/contact.html`);
});

app.get("/products", (req, res) => {
  console.log(req.url, req.method);
  res.sendFile(`${myPublicPath}/products.html`);
});

app.listen(port, () => {
  console.log("Express Server started at http://localhost:" + port);
});
