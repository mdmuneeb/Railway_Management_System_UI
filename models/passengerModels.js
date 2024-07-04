const con = require('../database');  // Adjust the path as necessary

const Passenger = {
  // Get all passengers
  getAllPassengers: function (callback) {
    const sql = 'SELECT * FROM passenger';
    con.query(sql, callback);
  },


  // Create a new passenger

  // first checking the phone number
  findPassengerByPhoneNumber: function (phone_number, callback) {
    const sql = 'SELECT * FROM passenger WHERE phone_number = ?';
    con.query(sql, [phone_number], callback);
  },

  createPassenger: function (passenger, callback) {
    const sql = 'INSERT INTO passenger (name, gender, phone_number) VALUES (?, ?, ?)';
    con.query(sql, [passenger.name, passenger.gender, passenger.phone_number], function (err, result) {
      if (err) return callback(err);

    });
  },

  // Update a passenger by passenger_id
  updatePassenger: function (passenger_id, passenger, callback) {
    const sql = 'UPDATE passenger SET name = ?, gender = ?, phone_number = ? WHERE passenger_id = ?';
    con.query(sql, [passenger.name, passenger.gender, passenger.phone_number, passenger_id], function (err, result) {
      if (err) return callback(err);
      callback(null, result.affectedRows);  // Number of rows affected
    });
  },

  // Delete a passenger by passenger_id
  deletePassenger: function (passenger_id, callback) {
    const sql = 'DELETE FROM passenger WHERE passenger_id = ?';
    con.query(sql, [passenger_id], function (err, result) {
      if (err) return callback(err);
      callback(null, result.affectedRows);  // Number of rows affected
    });
  }
};

module.exports = Passenger;