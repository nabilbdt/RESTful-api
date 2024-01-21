const express = require('express');
const mongoose = require('mongoose')
const app = express();

//MONGOdb connection
mongoose.set("strictQuery", false);
mongoose.
connect('mongodb://127.0.0.1:27017/RESTfulApi')
.then(() => {
    console.log("MongoDB Connected") 
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    }) 
})
.catch(err => console.log(err));





//routes
app.get('/', (req,res) => {
    res.send("Hello World!");
})

app.get('/blog', (req,res) => {
    res.send("Hello BLOG, I am NABIL  !");
})

