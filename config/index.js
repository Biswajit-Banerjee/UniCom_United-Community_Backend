const env = process.env.NODE_ENV || "development";

/**
 * Base config for identifing the enviornments
 */
const baseConfig = {
  env,
  isDev: env === "development",
  isProd: env === "production",
  isTest: env === "testing",
  port: 3000,
};

/**
 * envConfig here defined as different enviornment configeration object
 */

let envConfig = {};

/**
 * route to different env settings files as
 * 		devlopment as dev
 * 		testing as testing
 * 		production as prod
 */

switch (env) {
  case "dev":
  case "development":
    envConfig = require("./dev").config;
    break;
  case "test":
  case "testing":
    envConfig = require("./testing").config;
    break;
  case "prod":
  case "production":
    envConfig = require("./prod").config;
    break;
  default:
    envConfig = require("./dev").config;
}

module.exports = {
  ...baseConfig,
  ...envConfig,
};
