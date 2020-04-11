const mongoose = require("mongoose");
const Resource = require("../models/resources.model");

const addResource = (user_id, source, resourceUpdate) => {
  // save all parameters in resource schema
  try {
    new Resource({
      user_id: user_id,
      created_at: Date.now(),
      source: source,
      resources_update: resourceUpdate, // payload may differ from helper to helper
    }).save();
    console.log("IN addResource() ---> Resource added");
    return {
      sucess: true,
      meessage: "resource added successfully",
      status: 201,
      error: null,
    };
  } catch (error) {
    return {
      sucess: false,
      meessage: "Unable to add resource",
      status: 400,
      error: error,
    };
  }
};

const updateResource =  (user_id, source, resourceUpdate) => {
  // update all parameters in resource schema
  return Resource.findOneAndUpdate(
    {
      user_id: user_id,
      source: source,
    },
    {
      $set: {
        resources_update: resourceUpdate,
        updated_at: Date.now(),
      },
    },
    {
      new: true,
    },
    (err, doc) => {
      if (err) {
        return {
          sucess: false,
          meessage: "Unable to update resource",
          status: 400,
          error: error,
        };
      }
      console.log("UPDATED RESOURCE  ::: :", doc);
      return (doc);
    }
  );
};

module.exports = {
  addResource,
  updateResource,
};
