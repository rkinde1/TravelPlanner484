const mongoose = require('mongoose');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const getUser = asyncHandler(async (req,res) => {
    const {_id, firstName, username, email} = await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
        firstName,
        username,
        email
    })
})



const register = asyncHandler(async (req,res) => {
    //Take params from body and store them

    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const { username, email, password } = req.body;


    if (!firstName || !lastName || !username || !email || !password) {
        res.status(400)
        throw new Error("Please submit all fields");
    }
    
    //Check if user already exists given the credentials, if so, throw error
    const userExists = await User.findOne({ username });
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
    })
   
   
    // If the data matches the schema the user should be created...
    if(user) {
        return res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
            email: user.email,
            token: generateToken(user.id)
        });
    } else {                                 //Else the  user data was invalid
        res.status(400);
        throw new Error('Invalid user data!');
    }
})

const login = asyncHandler(async(req,res) => {
    const { username , password} = req.body;

    //Find the user
    const user = await User.findOne({ username })

    //Compare the hashes to see if they are the same, if so, send some of the credentials back to the client
    if (user && (await bcrypt.compare(password, user.password))) {
        return res.status(200).json({
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });
        
    } else {             
                            //   Else there was invalid credentials
        return res.status(400).json({message: "Invalid Credentials"})
    }

})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '5d',
    })
}

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
    getUser,
}