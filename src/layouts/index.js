import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'normalize.css'
import favicon from '../images/favicon.ico'
import ogp from '../images/ogp.png'

const desc = '出口貴也 (Takaya Deguchi) - Design Engineer & Service Designer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: desc,
        },
        {
          name: 'author',
          content: '出口貴也',
        },
        // {
        //   property: 'og:image',
        //   content: ogp,
        // },
        { property: 'og:description', content: desc },
        { property: 'og:title', content: 'Takaya Deguchi' },
        { name: 'twitter:site', content: '@dex1t' },
        // { name: 'twitter:card', content: 'summary_large_image' },
        // { name: 'twitter:card', content: 'player' },
        // {
        //   name: 'twitter:player',
        //   content: 'https://deg.ooo/?embed=1',
        // },
        // { name: 'twitter:player:width', content: '800' },
        // { name: 'twitter:player:height', content: '450' },
        // { name: 'twitter:image', content: ogp },
      ]}
    >
      <link rel="icon" href={favicon} />
      <link rel="canonical" href="https://5m.design" />
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
