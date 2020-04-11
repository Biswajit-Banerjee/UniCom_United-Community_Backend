const route = require("express").Router();
const UserSchema = require("../models/users.model");


route.get("/mypost/:_id", (req, res) => {
    UserSchema.find({
        _id : req.params._id
    }, [
        "_id",
        "post_list"
    ])
    .then(data => {
        if(data.length == 0) {
            res.send({
                success : true,
                payload : null
            });
        }
        res.send({
            success : true,
            payload : data
        });
    })
    .catch(err => {
        res.send({
            error : err,
            success : false
        })
    })
})

// Add new post 
route.post("/add/post/:_id", (req, res) => {
  let post_name = req.body.post_name;
  let post_desc = req.body.post_desc;
  let place_tag = req.body.place_tag;

  UserSchema.updateOne(
    {
      _id: req.params._id,
    },
    {
      $push: {
        post_list: {
          post_name: post_name,
          post_desc: post_desc,
          place_tag: place_tag,
        },
      },
    }
  )
    .then((myPost) => {
      res.send({
        success: true,
        message: "Post added successfully",
        status: 201,
        payload: myPost,
        error: null,
      });
    })
    .catch((err) => {
      console.log("ERROR IN ADDING POST : : : :", err);
      res.send({
        success: false,
        message: "ERROR",
        payload: null,
        error: err,
      });
    });
});

module.exports = route;
