const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product Name Is Mendatory"],
    },
    maincategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Maincategory",
        required: [true, "Product Maincategory Id Is Mendatory"]
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
        required: [true, "Product Subcategory Id Is Mendatory"]
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: [true, "Product Brand Id Is Mendatory"]
    },
    color: {
        type: String,
        required: [true, "Product Color Is Mendatory"]
    },
    size: {
        type: String,
        required: [true, "Product Size Is Mendatory"]
    },
    basePrice: {
        type: Number,
        required: [true, "Product Base Price Is Mendatory"]
    },
    discount: {
        type: Number,
        required: [true, "Product Discount Is Mendatory"]
    },
    finalPrice: {
        type: Number,
        default: true
    },
    stock: {
        type: Boolean,
        required: [true, "Product Stock Is Mendatory"]
    },
    stockQuantity: {
        type: Number,
        required: [true, "Product Stock Quantity Is Mendatory"]
    },
    description: {
        type: String,
        default: ""
    },
    pic: [],
    active: {
        type: Boolean,
        default: true
    }

})
const Product = new mongoose.model("Product", ProductSchema)

module.exports = Product