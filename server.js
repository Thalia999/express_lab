const express = require('express');

const app = express() //Calling express as a function sets up server
app.get('/',
    (req, res)=>{

console.log('Here');
res.render('index')
});
  

app.listen(3030); //Tell our app to listen for requests