// Pour l’instant, nous n’avons pas de vraie logique, mais nous préparons la structure.

// Contrôleur pour la route de test (anciennement GET /api/test)
const testApi = (req, res) => {
  res.status(200).json({ message: 'Le test depuis le controleur a fonctionné !', success: true });
};

// Contrôleur pour créer un article (anciennement POST /api/articles)
const createArticle = (req, res) => {
  const articleData = req.body;
  console.log('Données reçues par le controleur :', articleData);

  res.status(201).json({
    message: 'Article créé avec succès via le controleur !',
    article: { id: Date.now(), ...articleData },
  });
};

// On exporte les fonctions pour pouvoir les utiliser dans nos routes
module.exports = {
  testApi,
  createArticle,
};
