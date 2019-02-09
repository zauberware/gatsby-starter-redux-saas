import React, { Fragment, createElement } from "react"
import { graphql } from "gatsby"
import marksy from 'marksy'
import Highlight from 'react-highlight.js'

import {
  Hero,
  Layout,
  SEO,
} from '../components'

import { 
  Flex,
  Box,
  Heading,
  Image,
  Container,
} from '@magicsoup.io/stock'

import {
  P
} from '../styled'

const compile = marksy({
  // Pass in whatever creates elements for your
  // virtual DOM library. h('h1', {})
  createElement,

  // You can override the default elements with
  // custom VDOM trees
  elements: {
    h1 ({id, children}) {
      return <Heading variant="h1" as="h1" pt={5}>{children}</Heading>
    },
    h2 ({id, children}) {
      return <Heading variant="h2" as="h2">{children}</Heading>
    },
    h3 ({id, children}) {
      return <Heading variant="h3" as="h3">{children}</Heading>
    },
    h4 ({id, children}) {
      return <Heading variant="h4" as="h4">{children}</Heading>
    },
    h5 ({id, children}) {
      return <Heading variant="h5" as="h5">{children}</Heading>
    },
    // blockquote ({children}) {},
    hr () {
      return <Hr/>
    },
    ol ({children}) { return <Box as="ol" m={0} p={2} pl={4}>{children}</Box>},
    ul ({children}) { return <Box as="ul" m={0} p={2} pl={4}>{children}</Box>},
    li ({children}) { return <P as='li' mt={0} mb={0}>{children}</P>},
    p ({id, children}) {
      return <P>{children}</P>
    },
    // table ({children}) {},
    // thead ({children}) {},
    // tbody ({children}) {},
    // tr ({children}) {},
    // th ({children}) {},
    // td ({children}) {},
    // a ({href, title, target, children}) {},
    // strong ({children}) {},
    // em ({children}) {},
    // br () {},
    // del () {},
    img (props) { 
      return (
        <Flex as='span' justifyContent='center'>
          <Box 
            as='span'
            width={[1, 3/4, 2/3]} 
            py={5}>
            <Image {...props} style={{ maxWidth: '100%'}}/>
          </Box>
        </Flex>
      )
    },
    code ({language, code}) {
      return <Highlight language={language}>{code}</Highlight>
    },
    pre ({language, code}) {
      return <Highlight language={language}>{code}</Highlight>
    },
    // codespan ({children}) {},
  },
})

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, rawMarkdownBody } = markdownRemark
  const { title } = frontmatter
  const compiled = compile(rawMarkdownBody, {
    // Options passed to "marked" (https://www.npmjs.com/package/marked)
  });
  return (
    <Layout>
      <SEO 
        title={title} 
        keywords={
          [`gatsby`, `application`, `react`]
        } />
      <Container maxWidth={960}>
        {compiled.tree}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        slug
        title
      }
    }
  }
`