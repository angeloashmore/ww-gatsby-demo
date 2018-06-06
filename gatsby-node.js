/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

 // You can delete this file if you're not using it
exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.js')

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) return Promise.reject(result.errors)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
    })
  })
}
