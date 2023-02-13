const asyncHandler = require('express-async-handler')
const isodate = require('isodate')

const Post = require('../models/postModel')

// @desc    Get All Posts in DB
// @route   GET /api/posts
// @access  Public
const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})

// @desc    Update Post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
    const vet = await Post.findById(req.params.id)

    if (!vet) {
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
    const results = await Post.aggregate([
        {
            $match: {
                date: {
                    $gte: isodate(`${date}T00:00:00.000Z`),
                    $lt: isodate(`${date}T23:59:59.999Z`),
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
    filterByKeyword,
    filterByDate,
}
