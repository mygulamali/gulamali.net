const isIndex = data => (data.page.filePathStem === "/publications/index");

const layout = data => {
  if (isIndex(data)) {
    return data.layout;
  }

  return "layouts/publications.njk";
};

const permalink = data => {
  if (isIndex(data)) {
    return data.permalink;
  }

  const year = data.page.date.getFullYear();
  const slug = data.page.fileSlug;

  return `publications/${year}/${slug}.html`
};

module.exports = {
  eleventyComputed: {layout, permalink}
};
