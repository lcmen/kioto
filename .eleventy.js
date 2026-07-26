export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "kioto.css": "kioto.css" });
  return {
    pathPrefix: process.env.CI ? "/kioto/" : "/",
    dir: {
      input: "website",
      output: "dist",
      includes: "_includes"
    }
  };
}
