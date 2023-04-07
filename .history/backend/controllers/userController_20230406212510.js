const mongoose = require('mongoose');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

const getUser = (req,res) => {
    res.status(200).json({message: 'Get users'});
}

const register = asyncHandler(async (req,res) => {
    //Take params from body and store them
    const {firstName,lastName, username, email, password, DOB } = req.body;
    
    //Check if user already exists given the credentials, if so, throw error
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists!');
    }


    /*Before we store all of the information we need to make sure the 
      passwords are secured
    */
    
    //Apply 10 rounds of salting
    salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt); 

    

    //Make a schema from the stored params
    const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
        DOB,
    })
   
   
    // If the data matches the schema the user should be created...
    if(user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
            email: user.email,
            DOB: username.DOB
        });
    } else {                                 //Else the  user data was invalid
        res.status(400);
        throw new Error('Invalid user dat!');
    }
})

const login = asyncHandler(async(req,res) => {
    const { username , password} = req.body;

    //Find the user
    const user = await User.findOne({ username })

    //Compare the hashes to see if they are the same, if so, send some of the credentials back to the client
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            username: user.firstName,
            email: user.email
        })
        res.redirect('/itinerary')
    } else {             
                            //   Else there was invalid credentials
        res.status(400)
        throw new Error('Invalid Credentials')
    }

})

const updateUser = (req,res) => {
    res.status(200).json({message: `Update user info ${req.params.id}`});
}

const deleteUser = (req,res) => {
    res.status(200).json({message: `Delete user ${req.params.id}`});
}

module.exports = { 
    getUser,
    register,
    login,
    updateUser,
    deleteUser,
}