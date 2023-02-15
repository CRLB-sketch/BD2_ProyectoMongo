const express = require('express')
const router = express.Router()
const {
    getAllPosts,
    setPost,
    updatePost,
    deletePost,
    getPostsInOrder,
    getPostsOfUser,
    filterByKeyword,
    filterByDate,
} = require('../controllers/postController')

// Define Routes for Post
router.get('/', getAllPosts)
router.post('/', setPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

router.get('/in-order', getPostsInOrder)
router.get('/posts-user/:id', getPostsOfUser)

// Agregaciones
router.post('/keyword', filterByKeyword)
router.post('/date', filterByDate)

module.exports = router
