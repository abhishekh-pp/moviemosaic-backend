const express = require("express");
const Movie = require("../models/Movie");
const Cast = require("../models/Cast");
const Show = require("../models/Show");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send("Error occured");
  }
});

router.get("/:movieId", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).send("Movie of given ID is not found!");
  }
});

router.get("/:movieId/shows", async (req, res, next) => {
  try {
    const shows = await Show.find({ movie: req.params.movieId }).populate(
      "screen"
    );
    res.status(200).json(shows);
  } catch (error) {
    res.status(404).send("Movie of given ID is not found!");
  }
});

router.get("/:movieId/cast", async (req, res) => {
  try {
    const casts = await Cast.find({ movie: req.params.movieId });
    res.send(200).json(casts);
  } catch (error) {
    console.log(error);
    res.status(404).send("Movie of given ID is not found!");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).send("Error occured");
  }
});

module.exports = router;
