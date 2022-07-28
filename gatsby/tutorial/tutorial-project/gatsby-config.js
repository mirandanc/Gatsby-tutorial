/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Vupty',
    description: 'Vupty é uma loja online de produtos de limpeza, higiene e alimentação.',
    copyright: 'This website is copyright © 2020 by Vupty. All rights reserved.',
  }
}
