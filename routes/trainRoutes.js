const express = require('express');;
const router = express.Router();
const trainController = require('../controllers/trainController');

router.get('/get-trains', trainController.getTrains); // Get all trains
router.post('/get-trains-by-id', trainController.getTrainsByID); // Get train by train_id
router.post('/add-trains', trainController.create); // Create a new train
router.put('/update-trains', trainController.update); // Update a train
router.post('/delete-trains', trainController.delete); // Delete a train

module.exports = router;