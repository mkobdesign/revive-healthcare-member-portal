module.exports = {
  siteMetadata: {
    title: `Revive Healthcare - Client Portal`,
    description: `Revive healthcare's client portal`,
    author: `@MKOB_`,
    siteUrl: `https://revive.health`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("postcss-preset-env")({ stage: 3 }),
          require("cssnano")({
            preset: "default",
          }),
        ],
        precision: 6,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `white`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-optimize-svgs`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/images/icons/favicon.svg",
        // cache_busting_mode: "none", // Uncomment to enable service worker
        name: `revive-healthcare-client-portal`,
        short_name: `revive-health`,
        description: `Revive Healthcare's client portal`,
        start_url: `/`,
        background_color: `#E8F7F6`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-auth0",
      options: {
        domain: "revive-dev.us.auth0.com",
        clientID: "ATcERwqyrXYmuaOsNrjo04LrbDPDpgWL",
      }
    }
    // {
    //   resolve: "gatsby-plugin-offline",
    //   options: {
    //     workboxConfig: {
    //       globPatterns: ["**/*"],
    //     },
    //   },
    // }, Uncomment to enable service worker
  ],
};
