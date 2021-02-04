require("dotenv").config();

module.exports = {
  env: process.env.NODE_ENV,
  timestamp: new Date(),
  timezone: process.env.TIMEZONE || "UTC",
  url: process.env.URL || "http://localhost:8080",
};
