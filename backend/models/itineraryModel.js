const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const itinerarySchema = mongoose.Schema({
    VacationNum: ObjectId,
    ItineraryNum: Number,
    startDate: Date,
    endDate: Date,
    NameOfPlace: String,
    TypeOfDest: String,
    NumberOfDays: Number,
    VacationNum: Number
});

module.exports = mongoose.model('Itenerary', itinerarySchema);

