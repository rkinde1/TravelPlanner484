const express = require('express');
const router = express.Router()
const { register, updateUser, deleteUser } = require('../controllers/userController');

/*
    This is the current routes of the application. Basically the routes that  
    you see below is what will trigger a certain behavior. You can check the
    controllers to see what code is being executed.   
*/


//Given this route if its put request do updateUser, if post request do deleteUser.
router.route('/:id').put(updateUser).delete(deleteUser);



module.exports = router;