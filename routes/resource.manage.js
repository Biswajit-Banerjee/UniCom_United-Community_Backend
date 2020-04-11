const route = require("express").Router();
const Resource = require("../models/resources.model");
const { addResource, updateResource } = require("../utils/helper");
const middleware = require("../utils/middleware");


// get resources with user_id
route.get("/helper/resource/:user_id", middleware.checkToken,(req, res) => {

    Resource.find({
        user_id : req.params.user_id
    }, [
        "_id",
        "user_id",
        "source",
        "resources_update",
        "created_at",
        "updated_at"
    ])
    .then(data => {
        if(data.length == 0) {
            res.send({
              sucess: true,
              payload: null,
            });
        } 
        res.send({
          sucess: true,
          payload: data,
        });
    })
    .catch(err => {
        res.send({
            error : err,
            sucess : false
        })
    })


})

// add resources with user-id and source_id
route.post("/helper/add/resource", middleware.checkToken, (req, res) => {
  const source = req.body.source;

  var result;

  try {
    if (source == "Hotel") {
      const resourceUpdate = {
        no_of_rooms: req.body.resourceUpdate.no_of_rooms,
        quarantine_facility_available:
          req.body.resourceUpdate.quarantine_facility_available,
      };
      console.log(resourceUpdate);
      result = addResource(req.body.user_id, req.body.source, resourceUpdate);
      console.log(result)
    } else if (source == "Hospital") {
      const resourceUpdate = {
        no_of_beds: req.body.no_of_beds,
        medication: req.body.medication,
      };
      result = addResource(req.body.user_id, req.body.source, resourceUpdate);
    } else if (source == "Groceries Store") {
      const resourceUpdate = {
        groceries_available: req.body.groceries_available,
        no_of_days: req.body.no_of_days,
        delivery_person_available: req.body.delivery_person_available,
        time_to_open: req.body.time_to_open,
        time_to_close: req.body.time_to_close,
      };
      result = addResource(req.body.user_id, req.body.source, resourceUpdate);
    } else if (source == "Pharmacy Store") {
      const resourceUpdate = {
        medication: req.body.medication,
        no_of_days: req.body.no_of_days,
        doctor_available: req.body.doctor_available,
        time_to_open: req.body.time_to_open,
        time_to_close: req.body.time_to_close,
      };
      result = addResource(req.body.user_id, req.body.source, resourceUpdate);
    } else {
      const resourceUpdate = {
        resource_name: req.body.resource_name,
        resource_description: req.body.resource_description,
      };
      result = addResource(req.body.user_id, req.body.source, resourceUpdate);
    }
  } catch (error) {
    console.log("ERROR IN ADDING RESOURCE");
    res.send({
      sucess: false,
      meessage: "Bad Request",
      status: 400,
    });
  }

  res.send(result);
});

// for updating the resources
route.post("/helper/update/resource",middleware.checkToken, async (req, res) => {
  let user_id = req.body.user_id;
  let source = req.body.source;

  var result;
  try {
    if (source == "Hotel") {
      const resourceUpdate = {
        no_of_rooms: req.body.resourceUpdate.no_of_rooms,
        quarantine_facility_available:
          req.body.resourceUpdate.quarantine_facility_available,
      };
      result = await updateResource(
        req.body.user_id,
        req.body.source,
        resourceUpdate
      );
      console.log("HOTEL RESULT ::: : :", result)
    } else if (source == "Hospital") {
      const resourceUpdate = {
        no_of_beds: req.body.no_of_beds,
        medication: req.body.medication,
      };
      result = updateResource(
        req.body.user_id,
        req.body.source,
        resourceUpdate
      );
    } else if (source == "Groceries Store") {
      const resourceUpdate = {
        groceries_available: req.body.groceries_available,
        no_of_days: req.body.no_of_days,
        delivery_person_available: req.body.delivery_person_available,
        time_to_open: req.body.time_to_open,
        time_to_close: req.body.time_to_close,
      };
      result = updateResource(
        req.body.user_id,
        req.body.source,
        resourceUpdate
      );
    } else if (source == "Pharmacy Store") {
      const resourceUpdate = {
        medication: req.body.medication,
        no_of_days: req.body.no_of_days,
        doctor_available: req.body.doctor_available,
        time_to_open: req.body.time_to_open,
        time_to_close: req.body.time_to_close,
      };
      result = updateResource(
        req.body.user_id,
        req.body.source,
        resourceUpdate
      );
    } else {
      const resourceUpdate = {
        resource_name: req.body.resource_name,
        resource_description: req.body.resource_description,
      };
      result = updateResource(
        req.body.user_id,
        req.body.source,
        resourceUpdate
      );
    }
  } catch (error) {
    console.log("ERROR IN updating RESOURCE");
    res.send({
      sucess: false,
      meessage: "Bad Request",
      status: 400,
    });
  }

  res.send(result);
});

module.exports = route;
