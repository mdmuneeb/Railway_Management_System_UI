const User = require('../models/userModel');

exports.login = async (req, res) => {
  const { Email, UserPassword } = req.body;
  await User.findByUserID(Email, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      const user = results[0];
      if (UserPassword === user.UserPassword) {
        res.json({ success: true, UserType: user.UserType, UserName: user.UserName, UserId: user.User_ID});
      } else {
        res.status(401).json({ success: false, message: 'Invalid password' });
      }
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  });
};

exports.register = async (req, res) => {
  const { Email, UserPassword, UserName } = req.body;

  const newUser = {
    UserPassword: UserPassword,
    UserName: UserName,
    UserType: "passenger",
    Email: Email,
  };

  await User.create(newUser, (err, userID) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error registering user' });
      throw err;
    }
    res.json({ success: true, message: 'User registered successfully', User_ID: userID });
  });
};
