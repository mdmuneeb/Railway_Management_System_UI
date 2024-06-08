const con = require('../database');

const User = {
  findByUserID: function(User_ID, callback) {
    const sql = 'SELECT * FROM userinfo WHERE User_ID = ?';
    con.query(sql, [User_ID], callback);
  },
  create: function(user, callback) {
    const sql = 'INSERT INTO userinfo (UserName, UserPassword, UserType) VALUES (?, ?, ?)';
    con.query(sql, [user.UserName, user.UserPassword, user.UserType], function (err, result) {
      if (err) return callback(err);
      // Retrieve the inserted User_ID
      const userID = result.insertId;
      callback(null, userID);
    });
  }
};

module.exports = User;