import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Redirect, navigate } from '@reach/router'
import gql from 'graphql-tag' 
import { connect } from "react-redux"
import Cookies from 'universal-cookie'
import store from '../../redux/store'
import { loginUser } from '../../redux/actions/userActions'
import client from '../../apollo/client'

import { Container } from '@magicsoup.io/stock'

import { Layout } from '../../components'

// const mapStateToProps = (props) => {
//   const { user } = props
//   console.log("mapStateToProps")
//   console.log(user)
//   return user
// }

const TOKEN_LOGIN = gql`
  mutation {
    tokenLogin {
      email
      firstName
      lastName
      token
    }
  }
`

class PrivateRoute extends Component{

  constructor(props){
    super(props)
    this.state = {
      user: null,
    }
  }

  componentWillMount = async () => {

    const cookies = new Cookies()
    const bearerToken = cookies.get('bearer_token')

    if (bearerToken && bearerToken !== ''){
      
      // Login with bearerToken from cookies
      store.dispatch(loginUser({ token: bearerToken }))
      const { data } = await client.mutate({
        mutation: TOKEN_LOGIN
      })

      if (data.tokenLogin){
        cookies.set('bearer_token', data.tokenLogin.token, { path: '/'})
        this.setState({user: data.tokenLogin})
        store.dispatch(loginUser(data.tokenLogin))
      }else if (!this.props.isPublic) {
        cookies.remove('bearer_token')
        navigate('/app/login')
      }
      
    }else if(!this.props.isPublic){
      console.log('not logged in')
      // store.dispatch(logoutUser())
      // this.setState({user: null})
      navigate('/app/login')
    }
    
  }

  // componentWillMount(){
  //   const { user, location } = this.props
  //   console.log("componentWillUpdate")
  //   console.log(user)
  //   console.log(this.props.history)
  //   // if(!user && location.pathname !== `/app/login`){
  //   //   navigate('/app/login')
  //   // }
  //   this.setState({ loading: false })
  // }

  render() {
    const { component: Component, isPublic, ...rest } = this.props
    const { user } = this.state
    return (
      <Layout>
        <Container>
          { (user || isPublic) && <Component {...rest} /> }
        </Container>
      </Layout>
    )
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute

// export default connect(
//   mapStateToProps,
// )(PrivateRoute)