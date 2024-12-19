const mongoose = require("mongoose")

const SubcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subcategory Name Is Mendatory"],
        unique: true
    },
    pic: {
        type: String,
        required: [true, "Subcategory Pic Is Mendatory"]
    },
    active: {
        type: Boolean,
        default: true
    }

})
const Subcategory = new mongoose.model("Subcategory", SubcategorySchema)

module.exports = Subcategory