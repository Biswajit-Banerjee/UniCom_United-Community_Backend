//require("dotenv").config();

const config = {
  MONGODBURI: process.env.MONGODBURI,
  secret: process.env.secret
};

module.exports = {
  config,
};
