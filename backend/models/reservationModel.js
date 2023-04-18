const mongoose = require('mongoose');


const reservationSchema = mongoose.Schema({
    vacationNum: Number,
    type: String
});

module.exports = mongoose.model('Reservation', reservationSchema);