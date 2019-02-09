import React from 'react'
import { Link } from 'gatsby'
import {
  Layout,
  SEO,
} from '../components'

import {
 P
} from '../styled'

import { Heading, Container } from '@magicsoup.io/stock'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title='404: Not found' />
      <Heading as='h1' variant='h1'>404 Page not found</Heading>
      <P fontSize={3}>You just hit a route that doesn&#39;t exist... the sadness.</P>
      <P fontSize={3}><Link to='/'>Bring me back home...</Link></P>
    </Container>
  </Layout>
)

export default NotFoundPage
