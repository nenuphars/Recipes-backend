const router = require('express').Router();
const Recipe = require('../models/Recipe.model');

router.get('/all', (req, res) => {
  Recipe.find()
    .then((allRecipes) => {
      res.status(200).json(allRecipes);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get('/search-id/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then((oneRecipe) => {
      console.log(oneRecipe);
      res.status(200).json(oneRecipe);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/search/:creator', (req, res) => {
  const query = req.params.creator;

  Recipe.find({ creator: query })
    .then((recipes) => {
      console.log(recipes);
      res.status(200).json(recipes);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post('/', (req, res) => {
  Recipe.create(req.body)
    .then((newRecipe) => {
      console.log(newRecipe);
      res.status(201).json(newRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
});

router.delete('/:id', (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((deletedRecipe) => {
      console.log('Successfully deleted a recipe');
      res.status(200).json(deletedRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
