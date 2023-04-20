const mongoose = require('mongoose');
const { ObjectId } = require('mongodb').ObjectId;
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Vacation =  require('../models/vacationModel');


const createVacation = asyncHandler(async (req, res) => {
    //req.user will return the user object from the token!! Remember this!
    
    const  userID  = req.user._id.toString(); //This is the user id from the token, have to convert to string.
    const  vacationName  = req.body.vacation_name;
    const  startDate  = new Date(req.body.start_date);
    const  endDate  = new Date(req.body.end_date);
    const  country  = req.body.country;
    const NumberOfDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));

    if (!vacationName || !startDate || !endDate || !country) {
        res.status(400);
        throw new Error('Please submit all fields');
    }

    const vacation = new Vacation({
        userID,
        vacationName,
        startDate,
        endDate,
        country,
        NumberOfDays,
    });
   
    if (vacation) {
        await vacation.save();
        
        return res.status(201).json({
            _id: vacation._id,
            userID: vacation.userID,
            vacationName: vacation.vacationName,
            startDate: vacation.startDate,
            endDate: vacation.endDate,
            country: vacation.country,
            days: vacation.NumberOfDays,
        });
    } else {
        res.status(400);
        throw new Error('Invalid vacation data');
    }
});

const getVacations = asyncHandler(async (req, res) => {
    const vacations = await Vacation.find({userID: req.user._id.toString()}).select('-__v');
    if (vacations) {
        return res.status(200).json(vacations);
    } else {
        res.status(404);
        throw new Error('No vacations found');
    }
});

const updateVacation = asyncHandler(async (req, res) => {
    const vacation = await Vacation.findById(req.params.id);
    if (vacation) {
        if (req.body.vacation_name) vacation.vacationName = req.body.vacation_Name; else vacation.vacationName = vacation.vacationName; 
        if (req.body.start_date) vacation.startDate = new Date(req.body.start_date); else vacation.startDate = vacation.startDate; 
        if (req.body.end_date) vacation.endDate = new Date(req.body.end_date); else vacation.endDate = vacation.endDate; 
        if (req.body.country) vacation.country = req.body.country; else vacation.country = vacation.country; 
        vacation.NumberOfDays = Math.round((vacation.endDate - vacation.startDate) / (1000 * 60 * 60 * 24));

        const updatedVacation = await vacation.save();
        return res.status(200).json({
            _id: updatedVacation._id,
            userID: updatedVacation.userID,
            vacationName: updatedVacation.vacationName,
            startDate: updatedVacation.startDate,
            endDate: updatedVacation.endDate,
            country: updatedVacation.country,
            days: updatedVacation.NumberOfDays,
        });
    } else {
        res.status(404);
        throw new Error('Vacation not found');
    }
});

const deleteVacation = asyncHandler(async (req, res) => {
    const vacation = await Vacation.findById(req.params.id);
    if (vacation) {
        await Vacation.findByIdAndDelete(req.params.id);
        return res.status(200).json({message: 'Vacation removed'});
    } else {
        res.status(404);
        throw new Error('Vacation not found');
    }
});

module.exports = {
    createVacation,
    getVacations,
    updateVacation,
    deleteVacation
};