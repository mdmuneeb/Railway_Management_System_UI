const User = require('../models/userModel');

exports.createUser = (req, res) => {
  const userData = req.body;
  User.create(userData, (err, result) => {
    if (err) throw err;
    res.send('User added successfully');
  });
};

exports.getAllUsers = (req, res) => {
  User.getAll((err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  User.getById(id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  User.update(id, userData, (err, result) => {
    if (err) throw err;
    res.send('User updated successfully');
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.delete(id, (err, result) => {
    if (err) throw err;
    res.send('User deleted successfully');
  });
};
