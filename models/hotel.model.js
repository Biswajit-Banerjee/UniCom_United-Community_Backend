const mongoose = require("mongoose");
const { Schema } = mongoose;

const hotel = new Schema({
  address: String,
  area: String,
  city: String,
  latitude: Number,
  locality: String,
  longitude : Number
});

module.exports = mongoose.model("hotel", hotel);