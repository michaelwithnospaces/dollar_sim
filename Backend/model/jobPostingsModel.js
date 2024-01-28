const mongoose = require('mongoose')

const jobPostingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('JobPosting', jobPostingSchema)