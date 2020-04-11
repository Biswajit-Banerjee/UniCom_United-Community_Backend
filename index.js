const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const config = require("./config");

const testRoute = require("./routes/test.route");
const authUser = require("./routes/auth.user.js");
const resourceManager = require("./routes/resource.manage");
const postManager = require("./routes/post.manage");

const cors = require("cors");

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * MongoDB connections
 */
mongoose.Promise = global.Promise;
mongoose
  .connect(config.MONGODBURI)
  .then(() => console.log("CONNECTED TO MONGODB URI"))
  .catch((err) => console.log("MONGODB ERROR : ", err));

app.use("/api", [testRoute, authUser, resourceManager, postManager]);
/**
 * Setting the enviornment port
 */
try {
  app.listen(config.port, () => {
    if (config.env === "production")
      console.log(`UniCom Backend on https://mydomain.in/:${config.port}`);
    else console.log(`UniCom Backend on http://localhost:${config.port}`);
  });
} catch (e) {
  console.error(e);
}

module.exports = app;
