import React from 'react'
import { Router } from '@reach/router'
import { Container } from '@magicsoup.io/stock'
import {
  Layout,
  Profile,
  Plans,
  Login,
  PrivateRoute,
  ThankYou,
  WeWillMissYou,
} from '../components'

import { P } from '../styled'


const App = () => (
  <Layout>
    <Container>
      <Router>
        <PrivateRoute path='/app/profile' component={Profile} />
        <PrivateRoute path='/app/thank-you' component={ThankYou}/>
        <PrivateRoute path='/app/we-will-miss-you' component={WeWillMissYou}/>
        <Plans path='/app/plans' />
        <Login path='/app/login' />
        <PrivateRoute path='/app/' component={Profile} />
      </Router>
    </Container>
  </Layout>
)

export default App