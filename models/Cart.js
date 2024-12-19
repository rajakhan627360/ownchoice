const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User Id Is Mendatory"]
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product Id Is Mendatory"]
    },
    qty: {
        type: Number,
        required: [true, "Quantity Is Mendatory"]
    },
    total: {
        type: Number,
        required: [true, "Cart Total Is Mendatory"]
    }

})
const Cart = new mongoose.model("Cart", CartSchema)

module.exports = Cart