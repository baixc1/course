const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/itcast', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = new Schema({
    username: {
        type: String,
        required: true // 必须有
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)

new User({
    username: '张三',
    password: '123456'
}).save().then(() => {
    User.find()
        .then(data => console.log(data))
})