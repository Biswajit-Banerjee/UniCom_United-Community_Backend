const route = require("express").Router();

route.post("/", (req, res) =>{
  res.send(
    "<h1>UNI_COM Backend Server is up...</h1>"
  )
}
);

module.exports = route;
