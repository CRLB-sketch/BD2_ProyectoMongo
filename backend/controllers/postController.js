const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')

const mongodb = require('mongodb')

// @desc    Get All Posts in DB
// @route   GET /api/posts
// @access  Public
const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find().limit(2)
    res.status(200).json(posts)
})

// @desc    Update Post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (!post) {
        res.status(400)
        throw new Error('Post not find')
    }

    const updatedVet = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedVet)
})

// @desc    Set New Post to DB
// @route   POST /api/posts
// @access  Private
const setPost = asyncHandler(async (req, res) => {
    const { user_name_id, title, content, tags, multimedia, likes, comments } =
        req.body

    if (!content || !user_name_id) {
        res.status(400)
        throw new Error('Please add content and/or user_name')
    }

    // Check if content is empty
    if (/^\s*$/.test(content)) {
        throw new Error('The content is empty ')
    }

    const date = new Date()
    const post = await Post.create({
        user_name_id: user_name_id,
        date: date,
        title: title,
        content: content,
        tags: tags,
        multimedia: multimedia,
        likes: likes,
        comments: comments,
    })

    res.status(200).json({ success: true })
})

// @desc    Delete Post
// @route   DELETE /api/posts:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (!post) {
        res.status(400)
        throw new Error('Post Not Find')
    }

    await post.remove()

    res.status(200).json({ id: req.params.id })
})

// @desc    Get All Posts in Order
// @route   GET /api/posts/order
// @access  Public
const getPostsInOrder = asyncHandler(async (req, res) => {
    const posts = await Post.find().sort({ date: -1 })
    res.status(200).json(posts)
})

// @desc    Get Posts of a User
// @route   GET /api/posts/posts-user/:id_user_name
// @access  Public
const getPostsOfUser = asyncHandler(async (req, res) => {
    const id_user = new mongodb.ObjectId(req.params.id)
    const posts = await Post.find({
        user_name_id: { $eq: id_user },
    })
    res.status(200).json(posts)
})

// @desc    Add New Comment to Post
// @route   PUT /api/posts/new-comment/:id
// @access  Private
const newComment = asyncHandler(async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    const post_id = new mongodb.ObjectId(req.params.id)
    const { user_comment } = req.body

    if (!user_comment) {
        res.status(400)
        throw new Error('User Elements Not Found')
    }

    const post = await Post.updateOne(
        { _id: post_id },
        { $addToSet: { comments: user_comment } }
    )

    res.status(200).json(post)
})

// ! ==================================================================
// ! AGREGACIONES

// @desc    Agregation of Filter By Keyword
// @route   POST /api/posts/keyword
// @access  Private
const filterByKeyword = asyncHandler(async (req, res) => {
    const { keyword } = req.body

    if (!keyword) {
        res.status(400)
        throw new Error('Keyword was not enter')
    }

    const results = await Post.aggregate([
        {
            $match: {
                $or: [
                    { tags: { $regex: keyword, $options: 'i' } },
                    { content: { $regex: keyword, $options: 'i' } },
                    { description: { $regex: keyword, $options: 'i' } },
                ],
            },
        },
    ])

    res.status(200).json(results)
})

// @desc    Agregation of Filter By One Date
// @route   POST /api/posts/date
// @access  Private
const filterByDate = asyncHandler(async (req, res) => {
    const { date } = req.body

    if (!date) {
        res.status(400)
        throw new Error('Keyword was not enter')
    }

    // ISODate(`${date}T00:00:00.000Z`),
    const startDay = new Date(`${date}T00:00:00.000Z`)
    const endDay = new Date(`${date}T23:59:59.999Z`)
    const results = await Post.aggregate([
        {
            $match: {
                date: {
                    $gte: startDay,
                    $lt: endDay,
                },
            },
        },
    ])

    res.status(200).json(results)
})

// ! ==================================================================

module.exports = {
    getAllPosts,
    setPost,
    updatePost,
    deletePost,
    getPostsInOrder,
    getPostsOfUser,
    newComment,
    filterByKeyword,
    filterByDate,
}
