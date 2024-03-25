const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/react-food-app')
.then(()=>{
    console.log("connected")
}).catch((e)=>{
console.log(e);
})

const uerSchema= new mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
    },
    username:{
        type:String,
    },
    password:{
        type:String,
    },
})
const collection= mongoose.model(user,uerSchema);

module.exports(collection);