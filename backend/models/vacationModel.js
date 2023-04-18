const mongoose = require('mongoose');


const vacationSchema = mongoose.Schema({
    UserID: Number,
    vacationID: Number,
    startDate: Date,
    endDate: Date,
    country: String,
    budget: Number,
    NumberOfDays: Number,
    VacationNum: Number
});

module.exports = mongoose.model('Vacation', vacationSchema);