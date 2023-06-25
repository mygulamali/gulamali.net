require("dotenv").config();

module.exports = () => {
  if (process.env.ELEVENTY_ENV == "production") {
    return process.env.GA_TRACKING_ID;
  }
  return "DUMMY_GA_TRACKING_ID";
};
