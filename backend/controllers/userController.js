const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const md5 = require('md5')
const mongodb = require('mongodb')

// @desc    Get An Specific User
// @route   GET /api/users/:id
// @access  Public
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not find')
    }

    res.status(200).json(user)
})

// @desc   Create new user
// @route  POST /api/users/create
// @access Public
const createUser = asyncHandler(async (req, res) => {
    const { user_name, password, sex, age } = req.body

    // Verify if data exist
    if (!user_name || !password) {
        res.status(400)
        throw new Error('Please add all the fields')
    }

    // Checking if user exits in the database
    const userInDB = await User.findOne({ user_name })
    if (userInDB) {
        res.status(400)
        throw new Error('The username exist')
    }

    // Encryt Password
    const encryptedPassword = md5(password)

    // Create User
    const user = await User.create({
        user_name: user_name,
        password: encryptedPassword,
        sex: sex,
        age: age,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            user_name: user.user_name,
            posts: user.posts,
            profile_img: user.profile_img,
        })
    } else {
        res.status(400)
        throw new Error('Invalid data for new user')
    }
})

// @desc   Authenticate a user
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { user_name, password } = req.body

    const user = await User.findOne({ user_name })
    if (user && (await md5(password)) === user.password) {
        res.json({
            _id: user.id,
            user_name: user.user_name,
            posts: user.posts,
            profile_img: user.profile_img,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not find')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json({
        _id: updatedUser.id,
        user_name: updatedUser.user_name,
        real_info: updateUser.real_info,
        sex: updateUser.sex,
        birthday: updateUser.birthday,
    })
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not find')
    }

    await user.remove()

    res.status(200).json({ messsge: 'Usuario borrado' })
})

// @desc    Update Real Info of User
// @route   PUT /api/users/real-info/:id
// @access  Private
const updateRealInfo = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not find')
    }

    const user_id = new mongodb.ObjectId(req.params.id)
    if (!req.body.name) req.body.name = user.real_info.name
    if (!req.body.lastname) req.body.lastname = user.real_info.lastname
    if (!req.body.email) req.body.email = user.real_info.email

    await User.updateOne(
        { _id: user_id },
        {
            $set: {
                'real_info.name': req.body.name,
                'real_info.lastname': req.body.lastname,
                'real_info.email': req.body.email,
            },
        }
    )

    res.status(200).json({ success: true })
})

// @desc    Get An Specific User
// @route   GET /api/users/proyection/:id
// @access  Public
const userProyection = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id, {
        user_name: 1,
        'real_info.name': 1,
    })

    if (!user) {
        res.status(400)
        throw new Error('User not find')
    }

    // const user_id = new mongodb.ObjectId(req.params.id)
    // const result = User.find({ _id: user_id }, { user_name: 1 })

    res.status(200).json(user)
})

module.exports = {
    getUser,
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    updateRealInfo,
    userProyection,
}
