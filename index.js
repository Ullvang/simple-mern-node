require("dotenv").config();
const cors = require("cors");
const { corsOptions } = require("./config/cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const test = require("./schema/test");
const user = require("./schema/user");

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  res.send("Great! WOW!!");
});

app.get("/tests", async (req, res) => {
  test.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/users", async (req, res) => {
  user.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
