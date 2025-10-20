require('dotenv').config();


const express = require('express');
const connectDB = require('./config/db');


// Connexion à la base de données
connectDB();

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Routes
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/articles', articleRoutes); // ✅ Fixed: lowercase 'articles'
app.use('/api/users', userRoutes);
// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'Serveur Express fonctionne !' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});