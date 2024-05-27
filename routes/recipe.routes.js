const router = require('express').Router()
const Recipe = require('../models/recipe.model')

router.get("/", (req,res)=>{
    Recipe.find().then((allRecipes)=>{
        res.statusCode(200).json(allRecipes)
    })
    .catch((err)=>{
        console.log(errs)
        res.statusCode(400).json(err)
    })
})

module.exports = router