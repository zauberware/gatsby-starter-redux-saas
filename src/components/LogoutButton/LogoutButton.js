import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Link } from '@magicsoup.io/stock'
import { navigate } from '@reach/router'
import Cookies from 'universal-cookie'
import store from '../../redux/store'
import client from '../../apollo/client'

import { logoutUser } from '../../redux/actions/userActions';

class LogoutButton extends Component {
  logout = () => {
    client.mutate({
      mutation: LOGOUT,
    }).then(({ data }) => {
      if (data.logout) {
        navigate('/')
      }
    })
    store.dispatch(logoutUser())
    const cookies = new Cookies()
    cookies.remove('bearer_token')
  }

  render() {
    const { children } = this.props
    return (
      <Link {...this.props} onClick={this.logout}>
        {children}
      </Link>
    )
  }
}

export default LogoutButton

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`
