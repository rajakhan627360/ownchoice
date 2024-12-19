const mongoose = require("mongoose")

const CheckoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User Id Is Mendatory"]
    },
    orderStatus: {
        type: String,
        default: "Order Is Placed"
    },
    paymentStatus: {
        type: String,
        default: "Panding"
    },
    paymentMode: {
        type: String,
        default: "COD"
    },
    subtotal: {
        type: Number,
        required: [true, "Subtotal Is Mendatory"]
    },
    shipping: {
        type: Number,
        required: [true, "Shipping Amount Is Mendatory"]
    },
    total: {
        type: Number,
        required: [true, "Total Amount Is Mendatory"]
    },
    rppid: {
        type: String,
        default: ""
    },
    date: {
        type: String,
        default: ""
    },
    products: [
        {
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
                required: [true, "Checkout Total Is Mendatory"]
            }
        }
    ]

})
const Checkout = new mongoose.model("Checkout", CheckoutSchema)

module.exports = Checkout