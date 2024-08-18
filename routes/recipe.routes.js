const router = require("express").Router();
const { query } = require("express");
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

router.get("/search", (req,res)=>{
  console.log(req.params)
  let query = req.params

  if(query._id){
    Recipe.findById(query._id)
    .then((oneRecipe) => {
      console.log(oneRecipe);
      res.status(200).json(oneRecipe);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
    Recipe.find(query)
    .then((searchResult)=>{
      console.log(searchResult)
      res.status(200).json(searchResult)
      if(!searchResult){
        res.status(404).json("no results")
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  
  
  
})

// router.get("/:id", (req, res) => {
//   Recipe.findById(req.params.id)
//     .then((oneRecipe) => {
//       console.log(oneRecipe);
//       res.status(200).json(oneRecipe);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

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

router.delete("/:id", (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((deletedRecipe) => {
      console.log("Successfully deleted a recipe");
      res.status(200).json(deletedRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
