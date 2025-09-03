const express= require('express');
const morgan = require('morgan');
const app=express();

app.use(morgan('dev'))

app.set('view engine', 'ejs')




app.get('/',(req,res,next)=>{
    console.log("Middleware is working ok")
    let a=5;
    let b=5;
    console.log(a+b)
     next()
},
(req,res)=>{
  res.render('index');
})



app.get('/About',(req,res)=>{
  res.send("This is my About page");
})
app.get('/Profile',(req,res)=>{
  res.send("This is my Profile page");
})

app.listen(3000);