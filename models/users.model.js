const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");
const post_info = {
  post_name: {
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
  },
};

const userSchema = new Schema(
  {
    google_userName: {
      type: String,
      unique: true,
    },
    google_emailId: {
      type: String,
      unique: true,
      required: true,
    },
    profile_image: {
      type: String,
    },
    dob: {
      type: Date,
    },
    profile_type: {
      type: String,
      required: true,
    },
    help_seeker_detail: {
      address: {
        type: String,
        // required: true,
      },
      location: {
        type: String,
        coordinates: [
          {
            lat: Number,
            lng: Number,
          },
        ],
      },
      contact_details: {
        phone_number: Number,
        mobile_number: Number,
      },
    },
    helper_detail: {
      address: {
        type: String,
        // required: true,
      },
      location: {
        type: String,
        coordinates: [
          {
            lat: Number,
            lng: Number,
          },
        ],
      },
      contact_details: {
        phone_number: Number,
        mobile_number: Number,
      },
    },
    isUserLoggedIn: Boolean,
    post_list: {
      type: [post_info],
      default: [],
    },
  },
  {
    collection: "Userdb",
  }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("users", userSchema);
