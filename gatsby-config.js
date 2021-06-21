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
    // this require for regular import
    // {  
    //   resolve: `gatsby-plugin-alias-imports`,
    //   options: { 
    //     alias: { 
    //       "@": "src", 
    //     },
    //     extensions: [
    //       "js",
    //     ], 
    //   }, 
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
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
