const express = require('express');

const app = express() //Calling express as a function sets up server
app.set('view engine', 'ejs'); //Set the view engine to ejs
app.use(express.static('public')); 
app.get('/',
    (req, res)=>{

console.log('Here');
res.render('index', {username: "Tee"}); 
});
  

app.listen(3030); //Tell our app to listen for requests