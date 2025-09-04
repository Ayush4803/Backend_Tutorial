const express= require('express');
const morgan = require('morgan');
const userModel=require('./model/user')
const connectdb =require('./config/db')
const dotenv=require('dotenv')
dotenv.config()
const app=express();

connectdb();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine', 'ejs')






app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register', async(req,res)=>{
     const{email,name,password}= req.body

   await userModel.create({
    email: email,
    name: name,
    password: password
})

res.send("OK")
})


app.get('/About',(req,res)=>{
  res.send("This is my About page");
})
app.get('/Profile',(req,res)=>{
  res.send("This is my Profile page");
})

app.post('/get-form-data',(req,res)=>{
    console.log(req.body)
    res.send("Data recived")
})

app.get('/get-users',(req,res)=>{
    userModel.find().then((users)=>{
        res.send(users)
    })
})

app.get('/updated-user',async(req,res)=>{
   await userModel.findOneAndUpdate({
    email:'ayushkumar55528@gmailo.com'
  },{
    email:"ayush@9090gmail,com"
  })
  res.send("OK DONE⭐")
})

app.get('/delete-user',async(req,res)=>{
  await userModel.findOneAndDelete({
    name:'abhiabhi'
  })
  res.send("user-deleted")
})

app.listen(3000);