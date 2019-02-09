import React from 'react'
import { Router } from '@reach/router'
import { Container } from '@magicsoup.io/stock'
import {
  Layout,
  Profile,
  Plans,
  Login,
  PrivateRoute,
} from '../components'

import { P } from '../styled'


const App = () => (
  <Layout>
    <Container>
      <Router>
        <PrivateRoute path='/app/profile' component={Profile} />
        <Plans path='/app/plans' />
        <Login path='/app/login' />
        <PrivateRoute path='/app/' component={Profile} />
      </Router>
      <hr/>
      <P mt={5} fontWeight={700}>Define other private routes under <code>/src/pages/app.js</code></P>
    </Container>
  </Layout>
)

export default App