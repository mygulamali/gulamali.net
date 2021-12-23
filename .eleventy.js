module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("source/assets/fonts");
  eleventyConfig.addPassthroughCopy("source/favicon.ico");
  eleventyConfig.addPassthroughCopy("source/mygulamali.asc");
  eleventyConfig.addPassthroughCopy("source/robots.txt");

  return {
    dir: {
      input: "source"
    }
  }
};
