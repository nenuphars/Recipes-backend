const router = require("express").Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
  User.find()
    .then((allUsers) => {
      res.statusCode(200).json(allUsers);
    })
    .catch((err) => {
      console.log(err);
      res.statusCode(400).json(err);
    });
});
