//path is used to take the path of index.html

const path= require('path');
const express = require('express');

var app  = express();
const PublicPath = path.join(__dirname,'../public/');

app.use(express.static(PublicPath));



//console.log(PublicPath);

app.listen('3000',()=>{
    console.log("Starting server on port 3000");
})