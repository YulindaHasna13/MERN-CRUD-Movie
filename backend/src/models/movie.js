const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  duration: { type: Number, required: true },
  rating: { type: Number, required: true },
  release: { type: Number, required: true },
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
