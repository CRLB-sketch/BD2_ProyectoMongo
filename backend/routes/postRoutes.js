const express = require('express')
const router = express.Router()
const {
    getAllPosts,
    setPost,
    updatePost,
    deletePost,
    getPostsInOrder,
} = require('../controllers/postController')

// Define Routes for Post
router.get('/', getAllPosts)
router.post('/', setPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

router.get('/in-order', getPostsInOrder)

module.exports = router
