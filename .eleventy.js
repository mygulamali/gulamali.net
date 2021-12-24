module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("source/assets/fonts");
  eleventyConfig.addPassthroughCopy("source/favicon.ico");
  eleventyConfig.addPassthroughCopy("source/mygulamali.asc");
  eleventyConfig.addPassthroughCopy("source/robots.txt");
  eleventyConfig.addWatchTarget("source/assets/stylesheets/");

  return {
    dir: {
      input: "source"
    }
  }
};
