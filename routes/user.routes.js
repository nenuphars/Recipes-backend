const router = require("express").Router();
const User = require("../models/User.model");

router.get("/", (req, res) => {
  User.find()
  .select("-password")
  .populate("recipes favourites")
    .then((allUsers) => {
      res.statusCode(200).json(allUsers);
    })
    .catch((err) => {
      console.log(err);
      res.statusCode(400).json(err);
    });
});

module.exports = router;
