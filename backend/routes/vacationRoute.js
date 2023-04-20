const express = require('express');
const router = express.Router();
const { createVacation, getVacations, updateVacation, deleteVacation } = require('../controllers/vacationController');
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect,createVacation).get(protect,getVacations);
router.route('/:id').patch(protect,updateVacation).delete(protect,deleteVacation);


module.exports = router;