const mongoose = require("mongoose")

const BrandSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Brand Name Is Mendatory"],
        unique:true
    },
    pic:{
        type:String,
        required:[true,"Brand Pic Is Mendatory"]
    },
    active:{
       type:Boolean,
       default:true
    }

})
const Brand = new mongoose.model("Brand",BrandSchema)

module.exports = Brand