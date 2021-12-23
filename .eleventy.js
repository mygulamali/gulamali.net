module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("source/assets/fonts");

  return {
    dir: {
      input: "source"
    }
  }
};
