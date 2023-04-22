const jwt = require('jsonwebtoken')
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Get the token from the header
            token = req.headers.authorization.split(' ')[1] // Split the token from the Bearer
            const decoded = jwt.verify(token, process.env.JWT_SECRET) // Verify the token by using the same key as the one used to create the token
            req.user = await User.findById(decoded.id).select('-password') // Find the user by the id and select all the fields except the password
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = {protect}