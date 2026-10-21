let express = require('express');
let app = express();

app.use(express.json()); // Middleware to convert data into JS object
let Products = [];
let count = 0;

app.post('/addProducts', (req, res)=>{
//  console.log(req.body);    
 Products.push(req.body);
 res.status(201).json({
    Acknowledge: "Product data added successfully..." + (++count) + " products addedd.."
 });
 console.log(Products)
});
 
app.get('/showProducts',(req, res)=>{
    res.status(200).json({
        products: Products,
        message: "Products data received successfully..." 
    });
});

// index 0   - /deleteProducts/0
app.delete('/deleteProducts/:index',(req,res)=>{
    let i = req.params.index;
        delete Products[i];

    res.status(200).json({
        message : "Data deleted successfully..."
    })
});

// index 1    /updateProducts/1 
app.patch('/updateProducts/:index', (req,res) =>{
  let i = req.params.index; // fetching index
  
  let price = req.body.prod_price;  // fetching updating data
  let brand = req.body.prod_brand;

  // updating product
  Products[i].prod_price = price;
  Products[i].prod_brand = brand;

  res.status(200).json({
    message: 'Data updated successfully....'
  })
});


module.exports = app;
