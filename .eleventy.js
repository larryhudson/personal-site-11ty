const { DateTime }  = require('luxon');
const util          = require('util');

module.exports = function(eleventyConfig) {


  // Layout aliases for convenience
  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('conf', 'layouts/conf.njk');

  eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));

  // a debug utility
  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  });

  eleventyConfig.addFilter('livePosts', posts => {
    return posts.filter(p => p.data.status != 'hidden')
  })

  // Date helpers
  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('d LLLL y');
  });
  eleventyConfig.addFilter('htmlDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('y-MM-dd');
  });

  eleventyConfig.addFilter('withoutPostTag', tags => {
    return tags.filter(t => t !== "post")
  })

  eleventyConfig.addFilter('transformToLinks', tags => {
    return tags.map(tag => {
      const tagUrl = `/blog/tags/${tag}`
      return `<a href="${tagUrl}">${tag}</a>`
    })
  })

  eleventyConfig.addFilter('joinWithComma', strings => {
    return strings.join(", ")
  })

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy("./src/site/fonts");
  eleventyConfig.addPassthroughCopy("./src/site/images");
  eleventyConfig.addPassthroughCopy("./src/site/css");

  return  {
    dir: {
      input: "src/site",
      includes: "_includes",
      output: "dist"
    },
    passthroughFileCopy: true,
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
  };

};