const asyncHandler = require('express-async-handler');
const Login = require('../models/loginModel');

const getUser = asyncHandler(async (req,res) => {
    const users = await Login.find()
    res.status(200).json(users)
})

const login = asyncHandler(async (req,res) => {
    const newUser = await Login.create()
    res.status(200).json({message: "New user created"})
})



module.exports = { 
    getUser, 
    createUser,
    updateUser,
    deleteUser,
}