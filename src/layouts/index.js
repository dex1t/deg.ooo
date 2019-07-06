import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'normalize.css'
import favicon from '../images/favicon.ico'
import ogp from '../images/ogp.png'

const desc =
  '出口貴也 @dex1t UXエンジニア。戦略作りや体験設計から、UIデザイン、Webやモバイルアプリの開発まで、一気通貫したプロダクトづくりが強み。デザインとエンジニアリングを行き来しながら、新しいモノをつくるのが好き。'

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
        {
          property: 'og:image',
          content: ogp,
        },
        { property: 'og:description', content: desc },
        { property: 'og:title', content: 'Takaya Deguchi' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@dex1t' },
      ]}
    >
      <link rel="icon" href={favicon} />
      <link rel="canonical" href="https://deg.ooo" />
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
