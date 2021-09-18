require("dotenv").config();
const cors = require("cors");
const { corsOptions } = require("./config/cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const test = require("./schema/test");
const user = require("./schema/user");

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use(cors(corsOptions));
app.use(express.json());

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

app.post("/users", async (req, res) => {
  req.body._id = mongoose.Types.ObjectId();
  user.create(req.body, (err, result) => {
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
