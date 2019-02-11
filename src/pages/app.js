import React from 'react'
import { Router } from '@reach/router'
import { Container } from '@magicsoup.io/stock'
import {
  Profile,
  Plans,
  Login,
  AppRoute,
  ThankYou,
  WeWillMissYou,
} from '../components'

import { P } from '../styled'


const App = () => (
  <Router>
    <AppRoute path='/app/profile' component={Profile} />
    <AppRoute path='/app/thank-you' component={ThankYou}/>
    <AppRoute path='/app/we-will-miss-you' component={WeWillMissYou} />
    <AppRoute path='/app/login' component={Login} isPublic={true} />
    <AppRoute path='/app/plans' component={Plans} isPublic={true} />
    <AppRoute path='/app/' component={Profile} />
  </Router>
)

export default App