// routes/ticketRoutes.js
const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/get-all-tickets', ticketController.getAll);
router.get('/get-tickets', ticketController.getTickets);
router.post('/add-tickets', ticketController.create);
router.put('/update-tickets', ticketController.update);
router.delete('/delete-tickets', ticketController.delete);

module.exports = router;
