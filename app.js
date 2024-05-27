// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// Connects to the database
require("./db");

const express = require("express");
const app = express();

// Middleware
require("./config")(app);

// Route Handling:

const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

const recipeRoutes = require("./routes/recipe.routes");
app.use("/api/recipes", recipeRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
