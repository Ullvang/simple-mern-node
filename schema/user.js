const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let user = new Schema({
  _id: ObjectId,
  name: String,
  email: String,
  age: Number,
});

module.exports = mongoose.model("user", user);
