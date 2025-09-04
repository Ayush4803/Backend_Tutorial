const mongoose=require('mongoose')

const db=mongoose.connect('mongodb://0.0.0.0/AK').then(()=>{
    console.log("DB CONNECTED SUCCESSFULLY !!")
})
module.exports= db
