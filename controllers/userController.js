const users =[
    { id: 1, name: "Amine", email: "amine@amine.tn" },
    { id: 2, name: "Oussama", email: "oussama@oussama.tn" },
    { id: 3, name: "Akrem", email: "akrem@akrem.tn" }
]

// Fonction pour renvoyer tous les utilisateurs
const getAllUsers = (req, res) => {
  res.json(users);
};


const createUser = (req, res) => {
  const userData = req.body;
  console.log('Données reçues par le controleur :', userData);

  res.status(201).json({
    message: 'user créé avec succès via le controleur !',
    article: { id: 4, name: "adem", email: "adem@adem.tn" },
  });
};

module.exports = {
  getAllUsers
};