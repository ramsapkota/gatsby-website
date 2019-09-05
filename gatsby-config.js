module.exports = {
  siteMetadata: {
    title: `Ram Sapkota`,
    author: `@mmetalram`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
