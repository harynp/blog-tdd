const express = require('express');
const router = express.Router()
const Blog = require('../controllers/blog')

router.get('/blog', Blog.readArticle)
router.get('/blog/:id',Blog.getArticleById)
router.post('/blog', Blog.createArticle)
router.put('/blog/:id', Blog.updateArticle)
router.delete('/blog/:id', Blog.deleteArticle)

module.exports = router;
