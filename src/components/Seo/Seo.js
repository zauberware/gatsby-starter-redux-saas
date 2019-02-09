import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title, image }) {

  return (
    <Fragment>
      <StaticQuery
        query={detailsQuery}
        render={data => {
          const siteUrl = data.site.siteMetadata.siteUrl || 'http://localhost:8000'
          const metaDescription =
            description || data.site.siteMetadata.description
          const metaTitle =
            title || data.site.siteMetadata.title
          const metaImage =
            image || data.site.siteMetadata.image
          const googleSiteVerification = data.site.siteMetadata.googleSiteVerification
          return (
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={metaTitle}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: metaTitle,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:image`,
                  content: `${siteUrl}/${metaImage}`,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author,
                },
                {
                  name: `twitter:title`,
                  content: metaTitle,
                },
                {
                  name: `twitter:image`,
                  content: `${siteUrl}/${metaImage}`,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                }
              ]
              .concat(
                googleSiteVerification 
                  ? {
                    name: `google-site-verification`,
                    content: googleSiteVerification
                  } 
                  : []
              )
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
            />
          )
        }}
      />
      <Helmet>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
      </Helmet>
    </Fragment>
  )
}

SEO.defaultProps = {
  lang: `de`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
        siteUrl
        googleSiteVerification
      }
    }
  }
`
