const mongoose=require('mongoose')

function connectdb(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("DB IS SUCCESFULLY CONNECTED")
    })
}
module.exports=connectdb