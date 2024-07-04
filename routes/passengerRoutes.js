const express = require('express');
const router = express.Router();
const passengerControllers = require('../controllers/passengerController');

router.get('/passengers', passengerControllers.getAllPassengers);
router.post('/create-passenger', passengerControllers.addPassenger);
router.put('/update-passenger',passengerControllers.updatePassenger);
router.delete('/delete-passenger',passengerControllers.deletePassenger);

module.exports = router;