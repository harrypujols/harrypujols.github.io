const yaml = require("js-yaml");
const isLocal = process.env.ELEVENTY_ENV === "local";

module.exports = function (eleventyConfig) {
	eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));
	eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

	eleventyConfig.addPassthroughCopy({ "dev/assets": "assets" });
	eleventyConfig.addPassthroughCopy({ "dev/css": "css" });
	eleventyConfig.addPassthroughCopy({ "dev/js": "js" });
	eleventyConfig.addPassthroughCopy({ "dev/meta": "/" });

	eleventyConfig.addWatchTarget("dev/css");
	eleventyConfig.addWatchTarget("dev/js");
	eleventyConfig.addWatchTarget("dev/assets");

	return {
		dir: {
			input: "dev",
			output: isLocal ? "public" : "docs",
			includes: "templates/includes",
			layouts: "templates/layouts",
			data: "data",
		},
		templateFormats: ["liquid", "html", "md"],
	};
};
