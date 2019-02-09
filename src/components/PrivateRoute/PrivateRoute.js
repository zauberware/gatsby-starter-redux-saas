import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from '@reach/router'
import { connect } from "react-redux"

const mapStateToProps = (props) => {
  const { user } = props
  return user
}

const PrivateRoute = ({ component: Component, location, user, ...rest }) => {
  if (!user && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to login page.
    return <Redirect to='/app/login' noThrow/>
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default connect(
  mapStateToProps,
)(PrivateRoute)