const express = require('express');
const router = express.Router()
const { login, getUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(login).get(protect, getUser);


module.exports = router;