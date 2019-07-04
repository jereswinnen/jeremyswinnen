module.exports = function(eleventyConfig) {
  // Markdown-It Config
  let markdownIt = require("markdown-it");
  let markdownItAttrs = require("markdown-it-attrs");
  let options = {
    html: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  // Collections
  eleventyConfig.addCollection("entertainment", function(collection) {
    return collection.getFilteredByGlob("./src/content/+(gamelog|playlist|watchlist)/*.md");
  });
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("./src/content/+(articles|bookmarks|gamelog|notes|playlist|watchlist)/*.md");
  });
  eleventyConfig.addCollection("work", function(collection) {
    return collection.getFilteredByGlob("./src/content/work/*.md");
  });
  
  eleventyConfig.addCollection("articles", function(collection) {
    return collection.getFilteredByGlob("./src/content/articles/*.md");
  });
  eleventyConfig.addCollection("bookmarks", function(collection) {
    return collection.getFilteredByGlob("./src/content/bookmarks/*.md");
  });
  eleventyConfig.addCollection("gamelog", function(collection) {
    return collection.getFilteredByGlob("./src/content/gamelog/*.md");
  });
  eleventyConfig.addCollection("notes", function(collection) {
    return collection.getFilteredByGlob("./src/content/notes/*.md");
  });
  eleventyConfig.addCollection("playlist", function(collection) {
    return collection.getFilteredByGlob("./src/content/playlist/*.md");
  });
  eleventyConfig.addCollection("watchlist", function(collection) {
    return collection.getFilteredByGlob("./src/content/watchlist/*.md");
  });

  // Pass-through
  eleventyConfig.addPassthroughCopy('./src/_assets/styles/global.css');
  eleventyConfig.addPassthroughCopy('./src/_assets/scripts/site.min.js');
  eleventyConfig.addPassthroughCopy('./src/_assets/documents');
  eleventyConfig.addPassthroughCopy('./src/_assets/favicons');
  eleventyConfig.addPassthroughCopy('./src/_assets/images');

  // Liquid Config
  eleventyConfig.setLiquidOptions({
    cache: true,
    root: ['./src/_includes', './src/_layouts']
  });

  // Base Config
  return {
    templateFormats: ['liquid', 'md'],
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'www',
      layouts: '_layouts',
      includes: '_includes',
      data: '_data'
    }
  };
};