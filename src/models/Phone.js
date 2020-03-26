const mongoose = require('mongoose')

const PhoneSchema = new mongoose.Schema({
    code:  {
        type: String,
        uppercase: true,
        required: true
    },
    phone_model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        require: true
    },
    colors: {
        type: [String],
        required: true,
    }
})

module.exports = mongoose.model('Phone', PhoneSchema)