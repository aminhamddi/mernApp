const User = require('../models/User');

// @desc Créer un nouvel utilisateur
// @route POST /api/users
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.create({
      username,
      email,
      password
    });

    res.status(201).json({
      success: true,
      message: "Utilisateur créé avec succès",
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        success: false,
        message: `Cet ${field} est déjà utilisé.`
      });
    }

    res.status(400).json({
      success: false,
      message: "Erreur lors de la création de l'utilisateur",
      error: error.message
    });
  }
};

// @desc Récupérer tous les utilisateurs
// @route GET /api/users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des utilisateurs",
      error: error.message
    });
  }
};

module.exports = {
  createUser,
  getAllUsers
};