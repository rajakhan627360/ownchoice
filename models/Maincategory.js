const mongoose = require("mongoose")

const MaincategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Maincategory Name Is Mendatory"],
        unique:true
    },
    pic:{
        type:String,
        required:[true,"Maincategory Pic Is Mendatory"]
    },
    active:{
       type:Boolean,
       default:true
    }

})
const Maincategory = new mongoose.model("Maincategory",MaincategorySchema)

module.exports = Maincategory