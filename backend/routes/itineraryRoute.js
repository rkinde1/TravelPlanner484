const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createItinerary, getItineraries, updateItinerary, deleteItinerary } = require('../controllers/itineraryController');

router.route('/').post(protect, createItinerary).get(protect, getItineraries)

router.route('/:id').put(protect, updateItinerary).delete(protect, deleteItinerary) //This will be the route for the specific itinerary methods...


module.exports = router;