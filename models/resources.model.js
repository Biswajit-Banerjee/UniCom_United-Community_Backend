const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

/**
 * Types of Help with resource
 */

const resources_type = new Schema({
  user_id: {
    type: String,
    required: true,
    unique : true
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
  },
  source: {
    type: String,
  },
  resources_update : {
    type : Object,
    required : true
  }
});

resources_type.plugin(uniqueValidator);

module.exports = mongoose.model("resources", resources_type);
