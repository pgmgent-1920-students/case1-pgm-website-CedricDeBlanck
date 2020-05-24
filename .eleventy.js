const fs = require("fs");

module.exports = (eleventyConfig) => { 
    
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addWatchTarget("./src/");
    
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy({ 
      'src/_static': 'static/',
      'src/robots.txt': 'robots.txt'
    });
      
    // layout alias
    eleventyConfig.addLayoutAlias('default', 'default.liquid');
    eleventyConfig.addLayoutAlias('page', 'page.liquid');
    
    return {
        pathPrefix: '/case1-pgm-website-CedricDeBlanck/',
        dir: {
            output: 'docs',
            input: 'src/',
            data: '_data',
            pages: '_pages',
            includes: '_includes',
            layouts: '_layouts'
        },
        markdownTemplateEngine: 'liquid',
        htmlTemplateEngine: 'liquid',
    }
};