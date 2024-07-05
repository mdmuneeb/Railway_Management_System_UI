// controllers/ticketController.js
const Ticket = require('../models/ticketModels');
const User = require('../models/userModel');

// Retrieve all tickets
exports.getAll = (req, res) => {
    Ticket.findAll((err, results) => {
        if (err) {
            return res.status(404).json({ message: 'Database query error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'Data not found' });
        }
        res.json(results);
    });
}

// controller for the api for retrieving tickets by user id
exports.getTicketsByUserId = (req, res) => {
    const { User_ID } = req.body;
    Ticket.findByUserId(User_ID, (err, results) => {
        if (err) {
            return res.status(404).json({ message: 'Database query error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'No tickets found for this User' });
        }
        res.json(results);
    });
};
// Retrieve a ticket by composite key
exports.getTickets = (req, res) => {
    const { User_ID, passenger_id, sch_id } = req.body;
    Ticket.findByCompositeKey(User_ID, passenger_id, sch_id, (err, results) => {
        if (err) {
            return res.status(404).json({ message: 'Database query error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'Data not found' });
        }
        res.json(results);
    });
};

// Create a new ticket
exports.create = (req, res) => {
    const { User_ID, passenger_id, sch_id, date } = req.body;

    // Check if a ticket already exists for the same user, passenger, date, and schedule
    Ticket.findExistingTicket(passenger_id, sch_id, date, (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database query error' });
        }
        if (results.length > 0) {
            return res.status(400).json({ success: false, message: 'Ticket already exists for this passenger, date and schedule' });
        }

        // Find existing seat numbers for the given schedule and date
        Ticket.findExistingSeats(sch_id, date, (err, results) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Database query error' });
            }

            // Get existing seat numbers
            const existingSeats = results.map(result => result.seatNo);

            // Find the next available seat number
            let seatNo = 1;
            while (existingSeats.includes(seatNo)) {
                seatNo++;
            }

            // Create the new ticket with the assigned seat number
            const newTicket = { User_ID, passenger_id, sch_id, date, seatNo };

            Ticket.create(newTicket, (err) => {
                if (err) {
                    return res.status(500).json({ success: false, message: 'Error adding a new ticket' });
                }
                res.json({ success: true, message: 'Successfully added a new ticket', seatNo });
            });
        });
    });
};

// Update a ticket
exports.update = (req, res) => {
    const { User_ID, passenger_id, sch_id, date, seatNo } = req.body;
    const updatedTicket = { date, seatNo };

    Ticket.update(User_ID, passenger_id, sch_id, updatedTicket, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error updating ticket information' });
        }
        res.json({ success: true, message: 'Successfully updated ticket information' });
    });
};

// Delete a ticket
exports.delete = (req, res) => {
    const { User_ID, passenger_id, sch_id } = req.body;

    Ticket.delete(User_ID, passenger_id, sch_id, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error deleting ticket information' });
        }
        res.json({ success: true, message: 'Successfully deleted ticket information' });
    });
};
