const route = require("express").Router();

route.post("/", (req, res) =>{
  console.log(req.body.object_detail)
  res.send(
    "<h1>UNI_COM Backend Server is up...</h1>"
  )
}
);

module.exports = route;
