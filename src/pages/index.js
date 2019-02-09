import React from 'react'

import {
  Hero,
  Layout,
  SEO,
  Status,
} from '../components'

import { 
  Container ,
  Box,
} from '@magicsoup.io/stock'

import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
        <Hero />
        <Box py={6}>
          <hr/>
          <Status />
        </Box>
    </Container>
  </Layout>
)

export default IndexPage
