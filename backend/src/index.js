const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const { config } = require("dotenv");

const Movie = require("./routes/movie");

config();

const app = express();
const port = 5000;

connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/movie", Movie);

app.listen(port, () => {
  console.log(`Endpoint: http://localhost:${port}`);
});
