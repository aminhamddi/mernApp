const express = require('express');
const router = express.Router();

// On importe les fonctions du controleur
const { testApi, createArticle } = require('../controllers/articleController');

// Définition des routes
// Note : Le chemin '/' ici correspondra à la racine définie dans server.js

// Route GET pour /api/test (devient /test dans ce routeur)
router.get('/test', testApi);

// Route POST pour /api/articles (devient / dans ce routeur)
router.post('/', createArticle);

// On exporte le routeur pour l’utiliser dans server.js
module.exports = router;
