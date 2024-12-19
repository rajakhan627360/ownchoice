const mongoose = require("mongoose")

const ContactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Is Mendatory"]
    },
    email: {
        type: String,
        required: [true, "Email Address Is Mendatory"]
    },
    phone: {
        type: String,
        required: [true, "Phone Number Is Mendatory"]
    },
    subject: {
        type: String,
        required: [true, "Subject  Is Mendatory"]
    },
    message: {
        type: String,
        required: [true, "Message Is Mendatory"]
    },
    date: {
        type: String,
        default:""
    },
    active: {
        type: Boolean,
        default: true
    }

})
const ContactUs = new mongoose.model("ContactUs", ContactUsSchema)

module.exports = ContactUs