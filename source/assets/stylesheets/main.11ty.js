import { dirname, join } from "path";
import { compile } from "sass";
import { fileURLToPath } from "url";

export default class SassTemplate {
  data() {
    return { permalink: "/assets/main.css" };
  };

  render(_) {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const output = compile(
      join(__dirname, "./main.scss"),
      {
        loadPaths: [join(__dirname, "../../../node_modules")],
        style: "compressed"
      }
    );

    return output.css;
  };
};
