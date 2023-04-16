const mongoose = require('mongoose');


//Select means that when this schema is queried, that field comes with the query
const userSchema = mongoose.Schema({
    firstName: {type:String, select:true},
    lastName: String,
    username: {type:String, select:true},
    email: {type:String, select:true},
    password: String,


})

module.exports = mongoose.model('User', userSchema);