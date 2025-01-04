import "dotenv/config";

export default () => (
  process.env.ELEVENTY_ENV === "production"
    ? process.env.GA_TRACKING_ID
    : "DUMMY_GA_TRACKING_ID"
);
