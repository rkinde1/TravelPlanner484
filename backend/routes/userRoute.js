const express = require('express');
const router = express.Router()
const { register, updateUser, deleteUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Given this route if its get request do getUser, if post request do createUser.
router.route('/').get(login).post(register);


//Given this route if its put request do updateUser, if post request do deleteUser.
router.route('/:id').put(protect,updateUser).delete(deleteUser);



module.exports = router;