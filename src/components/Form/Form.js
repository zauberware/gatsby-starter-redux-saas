import React from 'react'
import { Button } from '@magicsoup.io/stock'
import { Box } from '@magicsoup.io/stock'
import { navigate } from '@reach/router'
import gql from 'graphql-tag'

import { Input, Label, P } from '../../styled'
import store from '../../redux/store'
import Cookies from 'universal-cookie'
import client from '../../apollo/client'
import { loginUser } from '../../redux/actions/userActions'


class Form extends React.Component {
  constructor(props) {
    super(props)
    this.emailInput = React.createRef()
    this.passwordInput = React.createRef()
    this.state = {
      email: '',
      password: '',
      data: null,
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()

    const {
      email,
      password,
    } = this.state


    const { data } = await client.mutate({
      mutation: LOGIN,
      variables: {
        email,
        password,
      },
    })

    this.setState({ data })
    store.dispatch(loginUser(data.login))

    const cookies = new Cookies()
    if (data.login) cookies.set('bearer_token', data.login.token)
    else cookies.remove('bearer_token')

    if (data && data.login) {
      navigate('/app/profile')
    }
  }

  onChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }


  render = () => {
    const {
      email,
      password,
      data,
    } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <P>
          For this demo, please log in with the email <code>demo@zauberware.com</code> and the
          password <code>demo123</code>.
        </P>
        { data && !data.login && 
          <Box bg='red' p={3} my={3}>
            <P mt={0}color='white'>Wrong email or password</P>
          </Box> 
        }
        <Label>
          email
          <Input
            type='email'
            name='email'
            autoComplete='email'
            value={email}
            onChange={this.onChange}
            ref={this.emailInput}
            placeholder='Enter email'
            required={true}
          />
        </Label>
        <Label>
          Password
          <Input
            type='password'
            autoComplete='current-password'
            name='password'
            value={password}
            onChange={this.onChange}
            ref={this.passwordInput}
            placeholder='Enter password'
            required={true}
          />
        </Label>
        <Button 
          variant='primary' 
          type='submit'
          my={3}>Log in</Button>
      </form>
    )
  }

}

export default Form

const LOGIN = gql`
  mutation Login ($email: String!, $password: String!) {
    login (password: $password, email: $email) {
      email
      firstName
      lastName
      token
    }
  }
`