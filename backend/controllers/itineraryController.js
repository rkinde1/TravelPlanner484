const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Itinerary =  require('../models/itineraryModel');
const Vacation = require('../models/vacationModel');


const createItinerary = asyncHandler(async (req, res) => {
    
    
    const userID = req.user._id.toString(); //This is the user id from the token, have to convert to string.
    const vacationName = req.body.vacation_name;
    const startDate = new Date(req.body.start_date);
    const endDate = new Date(req.body.end_date);
    const nameOfPlace = req.body.name_of_place;
    const typeOfDest = req.body.type_of_dest;
    const numberOfDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    const vacation = await Vacation.findOne({vacationName: vacationName}); //Try to find the vacation in the database
    const vacationNum = vacation._id;
   
   
    //Check if vacation exists
    if (!vacation) {
        res.status(400);
        throw new Error('Vacation name does not exist');
    }

    if (startDate < vacation.startDate || startDate > vacation.endDate) { //Check if start date is within vacation dates
        res.status(400);
        throw new Error('Start date is not within vacation dates');
    }

    if (endDate < vacation.startDate || endDate > vacation.endDate) {   //Check if end date is within vacation dates
        res.status(400);
        throw new Error('End date is not within vacation dates');
    }
        
        const itinerary = new Itinerary({
            userID: userID,
            VacationNum: vacationNum,
            startDate: startDate,
            endDate: endDate,
            NameOfPlace: nameOfPlace,
            TypeOfDest: typeOfDest,
            NumberOfDays: numberOfDays,
        });

    
        await itinerary.validate();
        
        await itinerary.save();

        return res.status(201).json({
            _id: itinerary._id,
            userID: itinerary.userID,
            vacationNum: itinerary.VacationNum,
            startDate: itinerary.startDate,
            endDate: itinerary.endDate,
            nameOfPlace: itinerary.NameOfPlace,
            typeOfDest: itinerary.TypeOfDest,
            days: itinerary.NumberOfDays,

        });  

});

const getItineraries = asyncHandler(async (req, res) => {
    
    const vacation = await Vacation.findOne({vacationName: req.body.vacation_name});
    
    const vacationNum = vacation._id.toString();
    
    const itineraries = await Itinerary.find({userID: req.user._id, VacationNum: vacationNum}).select('-__v');
    res.status(200).json(itineraries);
});


const updateItinerary = asyncHandler(async (req, res) => {
    

    const itinerary = await Itinerary.findById(req.params.id);

    if(itinerary) {
        
        if(req.body.start_date) itinerary.startDate = new Date(req.body.start_date); else itinerary.startDate = itinerary.startDate;
        if(req.body.end_date) itinerary.endDate = new Date(req.body.end_date); else itinerary.endDate = itinerary.endDate;
        if(req.body.name_of_place) itinerary.NameOfPlace = req.body.name_of_place; else itinerary.NameOfPlace = itinerary.NameOfPlace;
        if(req.body.type_of_dest) itinerary.TypeOfDest = req.body.type_of_dest; else itinerary.TypeOfDest = itinerary.TypeOfDest;
        if(req.body.number_of_days) Math.round((itinerary.endDate - itinerary.startDate) / (1000 * 60 * 60 * 24));

        
        const updatedItinerary = await itinerary.save();
        return res.status(200).json({
            start_date: updatedItinerary.startDate,
            end_date: updatedItinerary.endDate,
            name_of_place: updatedItinerary.NameOfPlace,
            type_of_dest: updatedItinerary.TypeOfDest,
            number_of_days: updatedItinerary.NumberOfDays,
        });
    } else {
        res.status(404);
        throw new Error('Itinerary not found');
    }
});

const deleteItinerary = asyncHandler(async (req, res) => { //May need to tweak this later... GH copiloted this one for now
    const itinerary = await Itinerary.findById(req.params.id);

    if(itinerary) {
        await Itinerary.findByIdAndDelete(req.params.id);
        return res.json({message: 'Itinerary removed'});
    } else {
        res.status(404);
        throw new Error('Itinerary not found');
    }
});



module.exports = {
    createItinerary,
    getItineraries,
    updateItinerary,
    deleteItinerary
}