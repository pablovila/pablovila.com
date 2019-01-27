module.exports = {
  siteMetadata: {
    title: `Pablo Vila - Full Stack Developer`,
    description: `Personal webpage for Pablo Vila`,
    author: `@pablovilafer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `src/utils/typography.js` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pablo Vila - Full Stack Developer`,
        short_name: `Pablo Vila`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#b22222`,
        display: `minimal-ui`,
        icon: `src/images/pv-red.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
