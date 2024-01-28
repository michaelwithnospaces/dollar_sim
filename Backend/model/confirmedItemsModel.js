const mongoose = require('mongoose')

const confirmedItemsSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        // get: v => `${root}${v}`, //root = 'https://s3.amazonaws.com/mybucket/123.png' -> so input the http url => new User({name: 'Val', picture: '/123.png'}) | doc.picture; will return the http link to picture.png | doc.toObject({getters:false}).picture gets you relative file to picture image ('/123.png')
        required: true
    },
    purchased: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('ConfirmedItem', confirmedItemsSchema)