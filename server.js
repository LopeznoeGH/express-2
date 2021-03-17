var express = require('express');

var app = express();
const PORT = 3000;

app.set('view engine','ejs');//sent views to EJS

//this is how a route is built in Express
app.get('/', (req,res)=>{
  var title = "Our Home Page";
<<<<<<< HEAD
  res.render('index',{title:title});
=======
  res.render('pages/index',{title:title});
>>>>>>> 725773200a4fc18261e4670af8f86be14122a64b
});

app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
}); 