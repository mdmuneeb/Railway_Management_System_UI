const con = require('../database');

const User = {
  findByUserID: function(Email, callback) {
    const sql = 'SELECT * FROM userinfo WHERE Email = ?';
    con.query(sql, [Email], callback);
  },
  create: function(user, callback) {
    const sql = 'INSERT INTO userinfo (UserPassword, UserName, UserType, Email) VALUES (?, ?, ?, ?)';
    con.query(sql, [user.UserPassword, user.UserName, user.UserType, user.Email], function (err, result) {
      if (err) return callback(err);
      // Retrieve the inserted User_ID
      const userID = result.insertId;
      callback(null, userID);
    });
  }
};

module.exports = User;