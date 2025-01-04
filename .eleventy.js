import "dotenv/config";

const pageTitle = title => {
  const siteTitle = process.env.SITE_TITLE;
  return title ? `${title} < ${siteTitle}` : siteTitle;
};

const year = value => value.getFullYear();
const iso = value => value.toISOString();

export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("source/assets/fonts");
  eleventyConfig.addPassthroughCopy("source/favicon.ico");
  eleventyConfig.addPassthroughCopy("source/mygulamali.asc");
  eleventyConfig.addPassthroughCopy("source/robots.txt");
  eleventyConfig.addWatchTarget("source/assets/stylesheets/");
  eleventyConfig.addShortcode("pageTitle", pageTitle);
  eleventyConfig.addFilter("year", year);
  eleventyConfig.addFilter("iso", iso);

  return {
    dir: {
      input: "source"
    }
  }
};
