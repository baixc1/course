const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/itcast', {
    useMongoClient: true
})

module.exports = mongoose.model('Student', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    age: {
        type: Number
    },
    hobbies: {
        type: String
    }
}))