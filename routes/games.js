const express = require("express");


const router = express.Router();

// Display the games page
router.get("/", (req, res) => {
  res.render("games");
});


module.exports = router;
