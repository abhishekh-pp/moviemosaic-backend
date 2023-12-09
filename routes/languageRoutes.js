const express = require("express");
const Language = require("../models/Language");
const router = express.Router();

router.get("/languages", async (req, res, next) => {
  try {
    const languages = await Language.find({});
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).send("Error occured");
  }
});

module.exports = router;
