const path = require("path")
const sass = require("sass")

module.exports = class SassTemplate {
  data() {
    return { permalink: "/assets/main.css" }
  }

  render(data) {
    return sass.compile(
      path.join(__dirname, "./main.scss"),
      {
        loadPaths: [path.join(__dirname, "../../../node_modules")],
        style: "compressed"
      }
    ).css;
  }
}
