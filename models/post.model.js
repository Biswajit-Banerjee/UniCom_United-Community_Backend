const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const post_info = {
  post_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  post_desc: {
    type: String,
  },
  place_tag: {
    type: String,
  },
  created_at: {
    type: Date,
  }
};

/**
 * Post Schema
 */
const post = new Schema({
    user_id :  {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true,
    },
    post_list : {
        type : [post_info],
        default : []
    }

});

post.plugin(uniqueValidator);

module.exports = mongoose.model("post", post);