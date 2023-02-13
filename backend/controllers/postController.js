const asyncHandler = require('express-async-handler')

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

module.exports = {
    getAllPosts,
    setPost,
    updatePost,
    deletePost,
    getPostsInOrder,
}
