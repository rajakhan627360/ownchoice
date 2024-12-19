const mongoose = require("mongoose")

const TestimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Testimonial Name Is Mendatory"],
        unique: true
    },
    message: {
        type: String,
        required: [true, "Message Field Is Mandatory"]
    },
    pic: {
        type: String,
        required: [true, "Testimonial Pic Is Mendatory"]
    },
    active: {
        type: Boolean,
        default: true
    }

})
const Testimonial = new mongoose.model("Testimonial", TestimonialSchema)

module.exports = Testimonial