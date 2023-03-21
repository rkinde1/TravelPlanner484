const asyncHandler = require('express-async-handler');
const Login = require('../models/loginModel');

const getUser = asyncHandler(async (req,res) => {
    const users = await Login.find()

    res.status(200).json(users)
})

const createUser = (req,res) => {
    res.status(200).json({message: 'Create user'});
}



module.exports = { 
    getUser, 
    createUser,
    updateUser,
    deleteUser,
}