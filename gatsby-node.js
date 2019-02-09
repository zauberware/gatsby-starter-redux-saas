const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ page, graphql, actions }) => {
  const { createPage } = actions
  // const defaultPage = path.resolve(`src/templates/default-page.js`)

  // dynamic routes under /app/*
  const appRoutes = [
    'profile',
    'plans'
  ]
  appRoutes.forEach(element => {
    createPage({
      slug: element,
      path: `/app/${element}`,
      component: path.resolve(`./src/pages/app.js`),
    })
  });

  // Create static login page
  createPage({
    slug: 'login',
    path: `/app/login`,
    component: path.resolve(`./src/pages/app.js`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      slug: 'login',
      context: {}, // additional data can be passed via context
    },
  })

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        slug: node.frontmatter.slug,
        path: `/pages/${node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/default-page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.frontmatter.slug,
          context: {}, // additional data can be passed via context
        },
      })
    })
  })
}