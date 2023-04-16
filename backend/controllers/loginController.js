const asyncHandler = require('express-async-handler');
const Login = require('../models/loginModel');

const getUser = asyncHandler(async (req,res) => {
    const users = await Login.find()
    res.status(200).json(users)
})

const login = asyncHandler(async (req,res) => {
    
})



module.exports = { 
    login,
}