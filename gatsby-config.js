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
      },
      __key: "images",
    },
  ],
};
