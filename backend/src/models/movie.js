const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
