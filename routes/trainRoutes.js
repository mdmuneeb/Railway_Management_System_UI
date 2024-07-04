const express = require('express');;
const router = express.Router();
const trainController = require('../controllers/trainController');

router.get('/get-trains', trainController.getTrains);
router.post('/add-trains', trainController.create);
router.put('/update-trains', trainController.update);
router.delete('/delete-trains', trainController.delete);

module.exports = router;