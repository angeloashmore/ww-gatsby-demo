module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'ww-gatsby-demo',
        accessToken: 'MC5XeGMxa0NVQUFEMmNnNEg2.77-977-9fHbvv73vv71xde-_ve-_ve-_ve-_ve-_vXLvv73vv71JV--_ve-_vQfvv73vv73vv73vv71M77-9KgUb77-9Zw',
      },
    },
    'gatsby-transformer-remark'
  ],
}
