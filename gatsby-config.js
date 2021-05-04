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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
        // google analytics
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-129120794-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "UA-129120794-1",
        // Enables Google Optimize Experiment ID
        experimentId: "UA-129120794-1",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "UA-129120794-1",
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "albertcahyawan.com",
      },
      __key: "images",
    },
  ],
};
