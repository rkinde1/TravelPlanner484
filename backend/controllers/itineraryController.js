const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Itinerary =  require('../models/itineraryModel');
const Vacation = require('../models/vacationModel');


const createItinerary = asyncHandler(async (req, res) => {
    
    
    const userID = req.user._id.toString(); //This is the user id from the token, have to convert to string.
    const vacationName = req.body.vacation_name;

    const vacation = await Vacation.findOne({vacationName: vacationName}); //Try to find the vacation in the database

    //Check if vacation exists
    if (!vacation) {
        res.status(400);
        throw new Error('Vacation name does not exist');
    }
    
    const vacationNum = await vacation._id;
    console.log(vacationNum);

    const startDate = new Date(req.body.start_date);
    console.log(startDate);

    if (startDate < vacation.startDate || startDate > vacation.endDate) { //Check if start date is within vacation dates
        res.status(400);
        throw new Error('Start date is not within vacation dates');
    }

    const endDate = new Date(req.body.end_date);
    console.log(endDate);

    if (endDate < vacation.startDate || endDate > vacation.endDate) {   //Check if end date is within vacation dates
        res.status(400);
        throw new Error('End date is not within vacation dates');
    }

    const nameOfPlace = req.body.name_of_place;
    console.log(nameOfPlace);

    const typeOfDest = req.body.type_of_dest;
    console.log(typeOfDest);

    const numberOfDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    console.log(numberOfDays);
        
        const itinerary = new Itinerary({
            userID,
            vacationNum,
            startDate,
            endDate,
            nameOfPlace,
            typeOfDest,
            numberOfDays,
        });

        if (itinerary) {
            await itinerary.save();
            return res.status(201).json({
                _id: itinerary._id,
                userID: itinerary.userID,
                vacationNum: itinerary.vacationNum,
                startDate: itinerary.startDate,
                endDate: itinerary.endDate,
                nameOfPlace: itinerary.nameOfPlace,
                typeOfDest: itinerary.typeOfDest,
                days: itinerary.numberOfDays,

            });
        } else {
            res.status(400);
            throw new Error('Invalid itinerary data');
        }  

      

});

const getItineraries = asyncHandler(async (req, res) => {
    const itineraries = await Itinerary.find({userID: req.user._id, VacationNum: req.body.vacation_num}).select('-__v');
    res.json(itineraries);
});


const updateItinerary = asyncHandler(async (req, res) => {
    

    const itinerary = await Itinerary.findById(req.params.id);

    if(itinerary) {
        
        if(req.body.startDate) itinerary.startDate = new Date(req.body.startDate); else itinerary.startDate = itinerary.startDate;
        if(req.body.endDate) itinerary.endDate = new Date(req.body.endDate); else itinerary.endDate = itinerary.endDate;
        if(req.body.nameOfPlace) itinerary.nameOfPlace = req.body.nameOfPlace; else itinerary.nameOfPlace = itinerary.nameOfPlace;
        if(req.body.typeOfDest) itinerary.typeOfDest = req.body.typeOfDest; else itinerary.typeOfDest = itinerary.typeOfDest;
        if(req.body.numberOfDays) Math.round((itinerary.endDate - itinerary.startDate) / (1000 * 60 * 60 * 24));

        
        const updatedItinerary = await itinerary.save();
        return res.status(200).json({
            start_date: updatedItinerary.startDate,
            end_date: updatedItinerary.endDate,
            name_of_place: updatedItinerary.nameOfPlace,
            type_of_dest: updatedItinerary.typeOfDest,
            number_of_days: updatedItinerary.numberOfDays,
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
})




module.exports = {
    createItinerary,
    getItineraries,
    updateItinerary,
    deleteItinerary
}