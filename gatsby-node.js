/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Make _redirects files for Netlify
// https://www.netlify.com/docs/redirects/#handling-hostnames-and-protocols-differently
// https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify
// https://www.gatsbyjs.org/docs/bound-action-creators/#createRedirect

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createRedirect } = boundActionCreators
  createRedirect({
    fromPath: 'https://degooo.netlify.com/*',
    toPath: 'https://hi.deg.ooo/:splat',
    isPermanent: true,
  })
  createRedirect({
    fromPath: 'https://deg.ooo/*',
    toPath: 'https://hi.deg.ooo/:splat',
    isPermanent: true,
  })
}
