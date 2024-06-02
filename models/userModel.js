const con = require('../database');

// Create User model object
const User = {};

// Create a new user
User.create = (data, callback) => {
  const sql = 'INSERT INTO User (UserName, UserType, Age_Category, Gender, Ph_No) VALUES (?, ?, ?, ?, ?)';
  con.query(sql, [data.UserName, data.UserType, data.Age_Category, data.Gender, data.Ph_No], callback);
};

// Get all users
User.getAll = (callback) => {
  const sql = 'SELECT * FROM User';
  con.query(sql, callback);
};

// Get user by ID
User.getById = (id, callback) => {
  const sql = 'SELECT * FROM User WHERE User_id = ?';
  con.query(sql, [id], callback);
};

// Update user by ID
User.update = (id, data, callback) => {
  const sql = 'UPDATE User SET UserName = ?, UserType = ?, Age_Category = ?, Gender = ?, Ph_No = ? WHERE User_id = ?';
  con.query(sql, [data.UserName, data.UserType, data.Age_Category, data.Gender, data.Ph_No, id], callback);
};

// Delete user by ID
User.delete = (id, callback) => {
  const sql = 'DELETE FROM User WHERE User_id = ?';
  con.query(sql, [id], callback);
};

module.exports = User;
