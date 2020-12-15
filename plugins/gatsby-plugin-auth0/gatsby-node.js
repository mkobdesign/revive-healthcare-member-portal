const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const component = path.resolve(`plugins/gatsby-plugin-auth0/LoginCallback.js`)
  const { createPage } = actions
  createPage({
    path: '/login_callback',
    component,
  })
}
