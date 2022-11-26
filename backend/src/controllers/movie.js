const Movie = require("../models/movie");

const index = async (req, res) => {
  try {
    const data = await Movie.find();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const create = async (req, res) => {
  try {
    const data = await new Movie(req.body).save();
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
  }
};

const show = async (req, res) => {
  try {
    const data = await Movie.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const update = async (req, res) => {
  try {
    const data = await Movie.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
  }
};

const destroy = async (req, res) => {
  try {
    const data = await Movie.deleteOne({ _id: req.params.id });
    res.status(204).json(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { index, create, show, update, destroy };
