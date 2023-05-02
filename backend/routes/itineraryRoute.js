const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createItinerary, getItineraries, updateItinerary, deleteItinerary } = require('../controllers/itineraryController');

//Create Itinerary should be made when vacation is created and should be attached to vacation
router.route('/:id').post(protect, createItinerary).get(protect, getItineraries)

router.route('/:id').patch(protect, updateItinerary).delete(protect, deleteItinerary) //This will be the route for the specific itinerary methods...


module.exports = router;