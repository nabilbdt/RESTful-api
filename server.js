const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();
app.use(express.json());


//routes
app.get('/', (req,res) => {
    res.send("Hello World!");
})

app.get('/blog', (req,res) => {
    res.send("Hello BLOG, I am NABIL  !");
})

 app.post('/product', async(req,res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
//MONGOdb connection
mongoose.set("strictQuery", false);
mongoose
.connect('mongodb://127.0.0.1:27017/RESTfulApi')
.then(() => {
    console.log("MongoDB Connected") 
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    }) 
})
.catch(err => console.log(err));







