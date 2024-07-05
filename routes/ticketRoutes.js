// routes/ticketRoutes.js
const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/get-all-tickets', ticketController.getAll); // Retrieve all tickets
router.get('/get-tickets', ticketController.getTickets); // Retrieve a ticket by composite key
router.post('/get-tickets-by-user-id', ticketController.getTicketsByUserId); // Retrieve tickets by user ID
router.post('/add-tickets', ticketController.create); // Create a new ticket
router.put('/update-tickets', ticketController.update); // Update a ticket
router.delete('/delete-tickets', ticketController.delete); // Delete a ticket

module.exports = router;
