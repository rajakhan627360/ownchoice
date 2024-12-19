const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Full Name Is Mendatory"],
    },
    username:{
        type:String,
        required:[true,"User Name Is Mendatory"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Email Address Is Mendatory"],
        unique:true
    },
    phone:{
        type:String,
        required:[true,"Phone Number Is Mendatory"],
    },
    password:{
        type:String,
        required:[true,"Password Is Mendatory"],
    },
    address:{
        type:String
    },
    pin:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    role:{
        type:String,
        default:"Buyer"
    },
    pic:{
        type:String
    },
    otp:{
        type:Number,
        default:-123456789
    },
    active:{
       type:Boolean,
       default:true
    }

})
const User = new mongoose.model("User",UserSchema)

module.exports = User