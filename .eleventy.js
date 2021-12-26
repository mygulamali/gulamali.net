const pageTitle = title => {
  siteTitle = process.env.SITE_TITLE;
  if (title) {
    return `${title} < ${siteTitle}`;
  }

  return siteTitle;
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("source/assets/fonts");
  eleventyConfig.addPassthroughCopy("source/favicon.ico");
  eleventyConfig.addPassthroughCopy("source/mygulamali.asc");
  eleventyConfig.addPassthroughCopy("source/robots.txt");
  eleventyConfig.addWatchTarget("source/assets/stylesheets/");
  eleventyConfig.addShortcode("pageTitle", pageTitle);

  return {
    dir: {
      input: "source"
    }
  }
};
