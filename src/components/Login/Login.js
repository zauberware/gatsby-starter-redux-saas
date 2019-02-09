import React, { Fragment } from 'react'
import { Redirect } from '@reach/router'
import Form from '../Form'
import { Container, Card, Heading } from '@magicsoup.io/stock'
import { connect } from 'react-redux'

const mapStateToProps = (props) => {
  const { user } = props
  return user
}

class Login extends React.Component {

  render() {
    const { user } = this.props
    if(user && user.email){
      return <Redirect to='/app/profile' noThrow />
    }else{
      return (
        <Container maxWidth={800}>
          <Card variant='grey' p={4} pt={5} my={5}>
            <Heading variant='h1' as='h1'>Log in</Heading>
            <Form />
          </Card>
        </Container>
      )
    }
  }
}

export default connect(
  mapStateToProps,
)(Login)
