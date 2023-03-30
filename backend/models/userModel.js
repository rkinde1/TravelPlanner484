const mongoose = require('mongoose');
const Itenerary = require('./iteneraryModel').schema


//Select means that when this schema is queried, that field comes with the query
const userSchema = mongoose.Schema({
    firstName: {type:String, select:true},
    lastName: String,
    username: {type:String, select:true},
    email: {type:String, select:true},
    password: String,
    iteneraries: [Itenerary]
})

module.exports = mongoose.model('User', userSchema);