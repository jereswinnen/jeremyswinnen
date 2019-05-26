module.exports = function(eleventyConfig) {
  // work collection
  eleventyConfig.addCollection("work", function(collection) {
    return collection.getFilteredByGlob("./src/content/work/*.md");
  });

  // pass through
  eleventyConfig.addPassthroughCopy('./src/_assets/styles/global.css');
  eleventyConfig.addPassthroughCopy('./src/_assets/scripts/site.min.js');
  eleventyConfig.addPassthroughCopy('./src/_assets/favicons');
  eleventyConfig.addPassthroughCopy('./src/_assets/images');

  // Base config
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