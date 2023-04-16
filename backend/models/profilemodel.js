const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name: {
        nested: {
            username: String,
            firstName: String,
            lastName: String
        }
    },

    email: String,
    DOB: Date,


})

//File not done...