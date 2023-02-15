const express = require('express')
const router = express.Router()
const {
    getUser,
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    updateRealInfo,
} = require('../controllers/userController')

// Define Routes for User
router.get('/:id', getUser)
router.post('/create', createUser)
router.post('/login', loginUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/real-info/:id', updateRealInfo)

module.exports = router
