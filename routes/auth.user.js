const route = require("express").Router();
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/users.model");
const config = require("../config");


// Login and Sign up is done
route.post("/googleLogin", (req, res, next) => {
  UserSchema.findOne({
    google_emailId: req.body.google_emailId,    // if user already exist send just email
  }).then((existingUser) => {
    if (existingUser) {
      let token = jwt.sign(
        {
          email: req.body.google_emailId,
        },
        config.secret,
        {
          expiresIn: 86400, // 24 hours
        }
      );

      console.log("Existing User : : : ", existingUser);

      res.send({
        sucess: true,
        message: "Log in Successfully",
        token: token,
        payload: {
          _id: existingUser._id,
          google_profile_id: existingUser.google_profile_id,
          google_userName: existingUser.google_userName,
          profile_image: existingUser.profile_image,
          dob: existingUser.dob,
          profile_type: existingUser.profile_type,
          help_seeker_detail: existingUser.help_seeker_detail,
          helper_detail: existingUser.helper_detail,
        },
        error: null,
      });
    } else {
      new UserSchema({
        google_userName: req.body.google_userName,
        google_emailId: req.body.google_emailId,
        profile_image: req.body.profile_image,
        profile_type : req.body.profile_type,
      })
        .save()
        .then((user) => {
          let token = jwt.sign({ email: email }, config.secret, {
            expiresIn: 86400, // 24h expire
          });
          res.send({
            sucess: true,
            message: "Registered Successfully",
            token: token,
            payload: {
              _id: user._id,
              google_profile_id: user.google_profile_id,
              google_userName: user.google_userName,
              profile_image: user.profile_image,
              dob: user.dob,
              profile_type: user.profile_type,
              help_seeker_detail: user.help_seeker_detail,
              helper_detail: user.helper_detail,
            },
            error: null,
          });
        })
        .catch((err) => {
          res.send({
            sucess: false,
            message: "ERROR",
            payload: null,
            error: err
          });
        });
    }
  });
});

module.exports = route;
