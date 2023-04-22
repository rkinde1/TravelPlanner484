const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const itinerarySchema = mongoose.Schema({
    userID: ObjectId,
    VacationNum: ObjectId,
    startDate: Date,
    endDate: Date,
    NameOfPlace: String,
    TypeOfDest: String,
    NumberOfDays: Number,
});

module.exports = mongoose.model('Itenerary', itinerarySchema);

