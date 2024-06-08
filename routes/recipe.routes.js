const router = require("express").Router();
const Recipe = require("../models/Recipe.model");

router.get("/", (req, res) => {
  Recipe.find()
    .then((allRecipes) => {
      res.status(200).json(allRecipes);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then((oneRecipe) => {
      console.log(oneRecipe);
      res.status(200).json(oneRecipe);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
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

module.exports = router;
