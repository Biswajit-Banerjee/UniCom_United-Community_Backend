const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");


const userSchema = new Schema(
  {
    google_profile_id: {
      type: String,
      unique: true,
      // required: true,
    },
    google_userName: {
      type: String,
      unique: true,
      required: true,
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
      }
    },
  },
  {
    collection: "Userdb",
  }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model(
    "users", userSchema
);
