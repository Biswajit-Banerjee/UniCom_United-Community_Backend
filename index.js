const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const testRoute = require("./routes/test.route");

const registerUser = require("./routes/register.user.js")

const cors = require("cors");

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", [testRoute, registerUser]);
/**
 * Setting the enviornment port
 */
try {
  app.listen(config.port, () => {
    if (config.env === "production")
      console.log(
        `UniCom Backend on https://mydomain.in/:${config.port}`
      );
    else console.log(`UniCom Backend on http://localhost:${config.port}`);
  });
} catch (e) {
  console.error(e);
}

module.exports = app;