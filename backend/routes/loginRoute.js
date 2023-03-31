const express = require('express');
const router = express.Router()
const { log } = require('../controllers/loginController');

router.route('/signup').post(log);