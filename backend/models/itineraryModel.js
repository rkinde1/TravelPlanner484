const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const itinerarySchema = mongoose.Schema({
    userID: ObjectId,
    VacationNum: ObjectId,
    startDate: {type:Date, select:true},
    endDate: {type:Date, select:true},
    NameOfPlace: {type:String, select:true},
    TypeOfDest: {type:String, select:true},
    NumberOfDays: {type:Number, select:true},
});

module.exports = mongoose.model('Itinerary', itinerarySchema, 'Itineraries');

