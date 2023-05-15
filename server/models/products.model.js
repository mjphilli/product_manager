const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [10, "{PATH} must be at least 10 characters long"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 characters long"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Products', ProductSchema)