const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Itinerary =  require('../models/itineraryModel');


const createItinerary = asyncHandler(async (req, res) => {
    
    if(!req.body) { //Dont know what is needed in the request yet, so for now lets just check if there is a body
        res.status(400);
        throw new Error('Invalid data');
    }
    
    const {title, description, city, country, duration, price, hashtags} = req.body;
    const itinerary = new Itinerary({
        title,
        description,
        city,
        country,
        duration,
        price,
        hashtags
    });

    const createdItinerary = await itinerary.save();
    res.status(201).json(createdItinerary);
});

const getItineraries = asyncHandler(async (req, res) => {
    const itineraries = await Itinerary.find({user: req.user._id});
    res.json(itineraries);
});


const updateItinerary = asyncHandler(async (req, res) => {
    const {title, description, city, country, duration, price, hashtags} = req.body;

    const itinerary = await Itinerary.findById(req.params.id);

    if(itinerary) {
        itinerary.title = title;
        itinerary.description = description;
        itinerary.city = city;
        itinerary.country = country;
        itinerary.duration = duration;
        itinerary.price = price;
        itinerary.hashtags = hashtags;

        const updatedItinerary = await itinerary.save();
        res.json(updatedItinerary);
    } else {
        res.status(404);
        throw new Error('Itinerary not found');
    }
});

const deleteItinerary = asyncHandler(async (req, res) => { //May need to tweak this later... GH copiloted this one for now
    const itinerary = await Itinerary.findById(req.params.id);

    if(itinerary) {
        await itinerary.remove();
        return res.json({message: 'Itinerary removed'});
    } else {
        res.status(404);
        throw new Error('Itinerary not found');
    }
})




module.exports = {
    createItinerary,
    getItineraries,
    updateItinerary,
    deleteItinerary
}