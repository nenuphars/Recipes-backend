const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema(
  {
    ingredient_name: {
      type: String,
      required: true,
    },
    ingredient_amount: {
      type: Number,
      required: true,
    },
    ingredient_measuring: {
      type: String,
      enum: ["g", "kg", "ml", "l", "pinch", "whole", "tbsp", "tsp", "cups", "bunch"],
      required: true,
    },
  },
  { _id: false }
);

const commentSchema = new mongoose.Schema(
  {
    type: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date_published: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo_url: {
    type: String,
  },
  duration: {
    type: Number,
  },
  ingredientsList: [ingredientSchema],
  preparation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    enum: [
      "Pasta 🍝",
      "Comfort food 🛏️",
      "Chicken 🍗",
      "Salad 🥗",
      "Vegetarian 🥣",
      "Tacos 🌮",
      "Beef 🥩",
      "Curry 🍛",
      "Seafood 🦞",
      "Grilled ♨️",
      "Healthy ❤️",
      "Rice 🍚",
      "Stew 🍲",
      "Soup 🍜",
      "Vegan 🥦",
      "Quick & Easy ⚡",
      "Fish 🐟",
      "Pork 🐖",
      "Sandwiches 🥪",
      "Fruity 🍋",
      "Spicy 🌶️"
      
    ],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [commentSchema],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
