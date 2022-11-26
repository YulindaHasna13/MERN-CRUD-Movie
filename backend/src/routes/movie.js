const { Router } = require("express");

const { index, create, destroy, show, update } = require("../controllers/movie");

const Movie = Router();

Movie.route("/").get(index);
Movie.route("/").post(create);
Movie.route("/:id").get(show);
Movie.route("/:id").put(update);
Movie.route("/:id").delete(destroy);

module.exports = Movie;
