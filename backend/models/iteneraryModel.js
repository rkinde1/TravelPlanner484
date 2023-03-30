const mongoose = require('mongoose');


const itenerarySchema = mongoose.Schema({

    IteneraryNum: Number,
    startDate: Date,
    endDate: Date,
    NameOfPlace: String,
    TypeOfDest: String,
    NumberOfDays: Number,
    VacationNum: Number
});

module.exports = mongoose.model('Itenerary', itenerarySchema);

