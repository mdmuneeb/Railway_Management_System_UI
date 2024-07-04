const con = require('../database');

const Train = {
    // this is the implementation to get all the trains
    findAllTrains: function(callback) {
        const sql = 'SELECT * FROM train';
        con.query(sql, callback);
      },

    // this is the implementation for creating a new train
    create: function (train, callback) {
        const sql = 'INSERT INTO train (train_id, capacity)  VALUES (?,?)'
        con.query(sql, [train.train_id, train.capacity], function (err, result) {
            if (err) {
                return callback(err);
            }
            const train_ID = result.insertID;
            callback(null, train_ID);
        });

    },

    update: function(train_id, train, callback) {
        const sql = 'UPDATE train SET capacity = ? WHERE train_id = ?';
        con.query(sql, [train.capacity, train_id], function (err, result) {
        if (err) return callback(err);
        callback(null, result.affectedRows);  // Number of rows affected
        });
    },


    delete: function(train_id, callback) {
        const sql = 'DELETE FROM train WHERE train_id = ?';
        con.query(sql, [train_id], function (err, result) {
            if (err) return callback(err);
            callback(null, result.affectedRows);  // Number of rows affected
        });
    }
    // this is the implementation for the specific train id
    // findByTrainID: function(train_id, callback) {
    //     const sql = 'SELECT * FROM train WHERE train_id = ?';
    //     con.query(sql, [train_id], callback);
    //   },
}


module.exports = Train;