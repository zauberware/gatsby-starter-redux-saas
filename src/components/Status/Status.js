import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
import { connect } from 'react-redux'
import { Container, Box, Text } from '@magicsoup.io/stock'

import { P } from '../../styled'
import LogoutButton from '../LogoutButton'


const mapStateToProps = (props) => {
  const { user } = props
  return user
}

class Status extends Component {

  render(){
    let details
    let color = this.props.color || 'inherit'
    let linkColor = this.props.linkColor || 'primary'
    const { user } = this.props

    if (!user) {
      details = (
        <P color={color} mt={0}>
          To get the full app experience, you’ll need to
          {` `}
          <Link to='/app/login' style={{color: linkColor }}>log in</Link>.
        </P>
      )
    } else {
      const { firstName, lastName, email } = user

      details = (
        <P color={color} mt={0}>
          Logged in as 
          {` `}
          <Link
            to='/app/profile'
            style={{ color: color }}
          >
            {firstName} {lastName}
          </Link>
          {` - `}
          <LogoutButton style={{ color: linkColor }}>Logout</LogoutButton>
        </P>
      )
    }

    return <div>{details}</div>
  }
}

export default connect(mapStateToProps)(Status)