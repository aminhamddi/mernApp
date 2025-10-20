const express = require('express');
const router = express.Router();

const { createUser, getAllUsers } = require('../controllers/userController');

// Route pour créer un nouvel utilisateur
router.post('/', createUser);

// Route pour récupérer tous les utilisateurs
router.get('/', getAllUsers);

module.exports = router;