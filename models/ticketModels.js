// models/ticketModels.js
const con = require('../database');

const Ticket = {
    // Retrieve all tickets
    findAll: function (callback) {
        const sql = 'SELECT * FROM ticket';
        con.query(sql, callback);
    },
    // Find tickets by user ID
    findByUserId: function (User_ID, callback) {
        const sql = 'SELECT * FROM ticket INNER JOIN passenger ON ticket.passenger_id = passenger.passenger_id INNER JOIN schedule ON ticket.sch_id = schedule.sch_id WHERE User_ID = ?';
        con.query(sql, [User_ID], callback);
    },
    // Retrieve a ticket by composite key
    findByCompositeKey: function (User_ID, passenger_id, sch_id, callback) {
        const sql = 'SELECT * FROM ticket WHERE User_ID = ? AND passenger_id = ? AND sch_id = ?';
        con.query(sql, [User_ID, passenger_id, sch_id], callback);
    },
    // Create a new ticket
    // Check if a ticket already exists for the same user, passenger, date, and schedule
    findExistingTicket: function (passenger_id, sch_id, date, callback) {
        const sql = 'SELECT * FROM ticket WHERE passenger_id = ? AND sch_id = ? AND date = ?';
        con.query(sql, [passenger_id, sch_id, date], callback);
    },
    // Find existing seat numbers for a given schedule, date, and train
    findExistingSeats: function (sch_id, date, callback) {
        const sql = 'SELECT seatNo FROM ticket WHERE sch_id = ? AND date = ?';
        con.query(sql, [sch_id, date], callback);
    },

    create: function (ticket, callback) {
        const sql = 'INSERT INTO ticket (User_ID, passenger_id, sch_id, date, seatNo) VALUES (?, ?, ?, ?,?)';
        con.query(sql, [ticket.User_ID, ticket.passenger_id, ticket.sch_id, ticket.date, ticket.seatNo], function (err, result) {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    },
    // Update a ticket
    update: function (User_ID, passenger_id, sch_id, ticket, callback) {
        const sql = 'UPDATE ticket SET date = ?, seatNo = ? WHERE User_ID = ? AND passenger_id = ? AND sch_id = ?';
        con.query(sql, [ticket.date, ticket.seatNo, User_ID, passenger_id, sch_id], function (err, result) {
            if (err) return callback(err);
            callback(null, result.affectedRows);  // Number of rows affected
        });
    },
    // Delete a ticket
    delete: function (User_ID, passenger_id, sch_id, callback) {
        const sql = 'DELETE FROM ticket WHERE User_ID = ? AND passenger_id = ? AND sch_id = ?';
        con.query(sql, [User_ID, passenger_id, sch_id], function (err, result) {
            if (err) return callback(err);
            callback(null, result.affectedRows);  // Number of rows affected
        });
    }
}

module.exports = Ticket;
