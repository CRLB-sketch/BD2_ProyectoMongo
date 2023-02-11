const express = require('express');
const router = express.Router();
const {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  changeProfileImage,
} = require('../controllers/userController');

// Define Routes for User
router.post('/create', createUser);
router.post('/login', loginUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/change-profile-img/:id', changeProfileImage)

module.exports = router;
