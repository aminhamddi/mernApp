const express = require('express');
const router = express.Router();

const { getAllArticles, createArticle } = require('../controllers/articleController');

// Route pour récupérer tous les articles
router.get('/', getAllArticles);

// Route pour créer un nouvel article
router.post('/', createArticle);

module.exports = router;
