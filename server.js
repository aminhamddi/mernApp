const express = require('express');
const app = express();
const PORT = 3000;

// Cours MERN - Semaine 2 : Structuration de l’API

// On importe notre nouveau routeur
const articleRoutes = require('./routes/articleRoutes');

// Middleware pour parser le JSON
app.use(express.json());

// Route GET de base (reste ici car elle est générale)
app.get('/', (req, res) => {
  res.status(200).send('<h1>Page d\'accueil de notre API de Blog !</h1>');
});

// --- NOUVEAU : Utilisation du routeur ---
// Express utilisera le routeur 'articleRoutes' pour toute requête
// commençant par '/api/articles'
app.use('/api/articles', articleRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
