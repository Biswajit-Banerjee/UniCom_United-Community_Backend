//require("dotenv").config();

const config = {
  port : 3000,
  MONGODBURI: process.env.MONGODBURI,
  secret: process.env.secret
};

module.exports = {
  config,
};
