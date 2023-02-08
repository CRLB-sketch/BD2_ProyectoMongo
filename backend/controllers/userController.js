const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const md5 = require('md5');

// @desc   Create new user
// @route  POST /api/users/create
// @access Public
const createUser = asyncHandler(async (req, res) => {
  const { user_name, password } = req.body;

  // Verify if data exist
  if (!user_name || !password) {
    res.status(400);
    throw new Error('Please add all the fields');
  }

  // Checking if user exits in the database
  const userInDB = await User.findOne({ user_name });
  if (userInDB) {
    res.status(400);
    throw new Error('The username exist');
  }

  // Encryt Password
  const encryptedPassword = md5(password);

  // Create User
  const user = await User.create({
    user_name,
    password: encryptedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      user_name: user.user_name,
      posts: user.posts,
      profile_img: user.profile_img,
    });
  } else {
    res.status(400);
    throw new Error('Invalid data for new user');
  }
});

// @desc   Authenticate a user
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { user_name, password } = req.body;

  const user = await User.findOne({ user_name });
  if (user && (await md5(password)) === user.password) {
    res.json({
      _id: user.id,
      user_name: user.user_name,
      posts: user.posts,
      profile_img: user.profile_img,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not find');
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    _id: updatedUser.id,
    user_name: updatedUser.user_name,
    posts: updatedUser.posts,
    profile_img: updatedUser.profile_img,
  });
});

// @desc    Delete user
// @route   DELETE /api/users:id
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not find');
  }

  await user.remove();

  res.status(200).json({ messsge: 'Usuario borrado' });
});

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
};