const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  photo_url: {
    type:String
  },
  duration: Number,
  ingredientsList: [
    {
      ingredient_name: String,
      ingredient_amount: Number,
      ingredient_measuring: {
        type: String,
        enum: [
          "g",
          "kg",
          "ml",
          "l",
          "pinch",
          "whole",
          "half",
          "tablespoons",
          "teaspoons",
        ],
      },
    },
  ],
  preparation_method: String,
  description: String,
  servings: Number,
  tags: {
    type: String,
    enum: ["Italian 🌎", "Pasta 🍝", "Comfort food 🛏️"],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      date_published:{
        type:Date,
        default:Date.now
      }
    },
  ],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
