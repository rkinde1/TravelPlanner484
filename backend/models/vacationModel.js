const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const vacationSchema = mongoose.Schema({
    userID: ObjectId,
    vacationName: String,
    startDate: Date,
    endDate: Date,
    country: String,
    NumberOfDays: Number,
});

module.exports = mongoose.model('Vacation', vacationSchema, 'Vacations');