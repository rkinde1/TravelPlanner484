const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const vacationSchema = mongoose.Schema({
    userID: ObjectId,
    vacationName: {type:String, select:true, unique:true},
    startDate: {type:Date, select:true},
    endDate: {type:Date, select:true},
    country: {type:String, select:true},
    NumberOfDays: {type:Number, select:true},
});

module.exports = mongoose.model('Vacation', vacationSchema, 'Vacations');