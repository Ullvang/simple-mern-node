const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let test = new Schema({
  _id: ObjectId,
  test: String,
});

module.exports = mongoose.model("test", test);
