const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

const pageTitle = title => {
  siteTitle = process.env.SITE_TITLE;
  if (title) {
    return `${title} < ${siteTitle}`;
  }

  return siteTitle;
};

const year = value => value.getFullYear();
const iso = value => value.toISOString();

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("source/assets/fonts");
  eleventyConfig.addPassthroughCopy("source/favicon.ico");
  eleventyConfig.addPassthroughCopy("source/mygulamali.asc");
  eleventyConfig.addPassthroughCopy("source/robots.txt");
  eleventyConfig.addWatchTarget("source/assets/stylesheets/");
  eleventyConfig.addShortcode("pageTitle", pageTitle);
  eleventyConfig.addFilter("year", year);
  eleventyConfig.addFilter("iso", iso);
  eleventyConfig.addPlugin(UpgradeHelper);

  return {
    dir: {
      input: "source"
    }
  }
};
