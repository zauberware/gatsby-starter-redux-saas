
import React, { Component } from 'react'
import { Container, Heading } from '@magicsoup.io/stock'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import AccountForm from './AccountForm'

class Account extends Component{
  
  render(){
    return (
      <Query query={GET_ACCOUNT}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error || !data.me.account) return `Error! ${error.message}` 

          return (
            <Container>
              <Heading as='h1' variant='h1'>Manage your account data</Heading>
              <AccountForm account={data.me.account} />
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default Account

const GET_ACCOUNT = gql`
  query Account {
    me{
      account {
        name
        addressName
        accountEmail
        addressCompany
        addressLine1
        addressLine2
        addressCity
        addressState
        addressZip
        addressCountry
        vatId
      }
    }
  }
`