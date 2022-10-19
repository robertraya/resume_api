const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    employer: {
        require: true,
        type: String
    },
    job_title: {
        required: true,
        type: String
    },
    length_in_pos: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)