import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import 'normalize.css'
import favicon from '../images/favicon.ico'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Takaya Deguchi (dex1t) is UX Engineer & Product Manager in Tokyo.',
        },
        {
          name: 'author',
          content: '出口貴也 / Takaya Deguchi / dex1t',
        },
      ]}
    >
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto" />
      <link rel="icon" href={favicon} />
    </Helmet>
    <main>{children()}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
