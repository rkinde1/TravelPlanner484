/*const mongoose = require('mongoose');


const reservationSchema = mongoose.Schema({
    vacationNum: Number,
    type: String
});

module.exports = mongoose.model('Reservation', reservationSchema, 'Reservations');*/
/*const axios = require('axios');
const Flight = require('../models/flight');

const apiKey = process.env.AMADEUS_API_KEY;

const flightController = {
    searchFlightOffers: async (req, res) => {
        const { originLocationCode, destinationLocationCode, departureDate, adults } = req.query;

        try {
            const response = await axios.get(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&adults=${adults}`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            const flightOffers = response.data.data;

            // Save flight offers to database
            const savedFlightOffers = await Flight.insertMany(flightOffers);

            res.json(savedFlightOffers);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while searching for flight offers.' });
        }
    },

    getFlightOfferPrice: async (req, res) => {
        const { flightOfferId } = req.params;

        try {
            const response = await axios.get(`https://test.api.amadeus.com/v2/shopping/flight-offers/${flightOfferId}`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            const flightOfferPrice = response.data.data;

            res.json(flightOfferPrice);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while getting flight offer price.' });
        }
    },

    createFlightOrder: async (req, res) => {
        const { flightOfferId, traveler } = req.body;

        try {
            const response = await axios.post('https://test.api.amadeus.com/v2/booking/flight-orders', {
                data: {
                    type: 'flight-order',
                    flightOffers: [
                        {
                            id: flightOfferId
                        }
                    ],
                    travelers: traveler
                }
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            const flightOrder = response.data.data;

            // Save flight order to database
            const savedFlightOrder = await FlightOrder.create(flightOrder);

            res.json(savedFlightOrder);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while creating flight order.' });
        }
    }
};

module.exports = flightController;
*/