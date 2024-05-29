const mongoose = require('mongoose');


const ingredientSchema = new mongoose.Schema({
  ingredient_name: {
    type: String,
    required: true
  },
  ingredient_amount: {
    type: Number,
    required: true
  },
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
      "teaspoons"
    ],
    required: true
  }
}, { _id: false });

const commentSchema = new mongoose.Schema({
  type: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date_published: {
    type: Date,
    default: Date.now
  }
}, { _id: false });

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photo_url: {
    type: String
  },
  duration: {
    type: Number
  },
  ingredientsList: [ingredientSchema],
  preparation_method: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  servings: {
    type: Number,
    required: true
  },
  tags: {
    type: String,
    enum: ["Italian 🌎", "Pasta 🍝", "Comfort food 🛏️"]
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [commentSchema]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
