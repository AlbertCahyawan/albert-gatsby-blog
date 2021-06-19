const path = require('path')

module.exports = {
  pathPrefix: `example/blog`,  
  siteMetadata: {
    title: "gatsby-blog",
    siteUrl: "https://albertcahyawan.com/example/blog/"
  },
  
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp", 
    {  
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        name: "images",
        path: "./src/images/",
        alias: { 
          "@": "src", 
        },
        extensions: [
          "js",
        ],
        // google analytics
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-129120794-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true, 
      },
      __key: "images",
    },
  ],
};
