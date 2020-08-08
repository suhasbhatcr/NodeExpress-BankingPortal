const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
var viewPath = path.join(__dirname,'/views')

app.set('views',viewPath);
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req, res)=>{
    res.render('index', { title: 'Index' } );
});


app.listen(3000,() => console.log("PS Project Running on port 3000"));
