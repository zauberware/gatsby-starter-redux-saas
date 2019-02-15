import React, { Fragment } from 'react'
import { Box, Flex, Button, Heading } from '@magicsoup.io/stock'
import gql from 'graphql-tag'
import { Query } from "react-apollo";

import { Input, Label, P } from '../../styled'
import client from '../../apollo/client'
import { Notification } from '../../components'

class AccountForm extends React.Component {
  constructor(props) {
    super(props)

    this.nameInput = React.createRef()
    this.addressNameInput = React.createRef()
    this.addressCompanyInput = React.createRef()
    this.accountEmailInput = React.createRef()
    this.addressLine1Input = React.createRef()
    this.addressLine2Input = React.createRef()
    this.addressCityInput = React.createRef()
    this.addressStateInput = React.createRef()
    this.addressZipInput = React.createRef()
    this.addressCountryInput = React.createRef()
    this.vatIdInput = React.createRef()

    this.state = {
      account: null,
      data: null,
      errors: null,
    }
  }


  componentDidMount(){
    const { account } = this.props
    if(account){
      this.setState({
        account: account,
        data: null,
        errors: null,
        name: account.name,
        addressName: account.addressName,
        addressCompany: account.addressCompany,
        accountEmail: account.accountEmail,
        addressLine1: account.addressLine1,
        addressLine2: account.addressLine2,
        addressCity: account.addressCity,
        addressState: account.addressState,
        addressZip: account.addressZip,
        addressCountry: account.addressCountry,
        vatId: account.vatId,
      })
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()
    const {
      name,
      addressName,
      addressCompany,
      accountEmail,
      addressLine1,
      addressLine2,
      addressCity,
      addressState,
      addressZip,
      addressCountry,
      vatId,
    } = this.state

    const response = await client.mutate({
      mutation: UPDATE_ACCOUNT,
      variables: {
        name,
        addressName,
        addressCompany,
        accountEmail,
        addressLine1,
        addressLine2,
        addressCity,
        addressState,
        addressZip,
        addressCountry,
        vatId,
      },
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => {
        return error.message;
      });
      this.setState({ errors });
    });

    if(response){
      const { data } = response
      this.setState({ data })
    }
  }

  onChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render = () => {
    const { account } = this.state
    if (!account) return <div>Loading...</div>
    
    const {
      name,
      addressName,
      addressCompany,
      accountEmail,
      addressLine1,
      addressLine2,
      addressCity,
      addressState,
      addressZip,
      addressCountry,
      vatId,
      errors,
      data,
    } = this.state
    
    return (
      <form onSubmit={this.onSubmit}>
        <Heading variant='h3' as='h3'>Account details</Heading>
        { errors && 
          <Notification variant='error' messages={errors} />
        }
        { !errors && data && data.updateAccount &&
          <Notification variant='success' messages={['Your data was saved']} />
        }
        <Flex flexWrap='wrap'>
          <Box width={[1,1/2]} pr={3}>
            <Label>
              Name
              <Input
                type='text'
                name='name'
                autoComplete='name'
                value={name}
                onChange={this.onChange}
                ref={this.nameInput}
                placeholder='Enter name'
                required={true}
              />
            </Label>
          </Box>
          <Box width={[1,1/2]} pl={3}>
            <Label>
              Billing email
              <Input
                type='text'
                name='accountEmail'
                autoComplete='accountEmail'
                value={accountEmail}
                onChange={this.onChange}
                ref={this.accountEmailInput}
                placeholder='Enter email address'
                required={true}
              />
            </Label>
          </Box>
        </Flex>

        <Heading variant='h3' as='h3'>Billing address</Heading>
        <Flex flexWrap='wrap'>
          <Box width={[1,1/2]} pr={3}>
            <Label>
              Name for address
              <Input
                type='text'
                name='addressName'
                autoComplete='name'
                value={addressName}
                onChange={this.onChange}
                ref={this.addressNameInput}
              />
            </Label>
          </Box>
          <Box width={[1,1/2]} pl={3}>
            <Label>
              Company Name
              <Input
                type='text'
                name='addressCompany'
                autoComplete='organization'
                value={addressCompany}
                onChange={this.onChange}
                ref={this.addressCompanyInput}
              />
            </Label>
          </Box>
        </Flex>
        <Flex flexWrap='wrap'>
          <Box width={[1,1/2]} pr={3}>
            <Label>
              Address 1
              <Input
                type='text'
                name='addressLine1'
                autoComplete='billing street-address'
                value={addressLine1}
                onChange={this.onChange}
                ref={this.addressLine1Input}
                placeholder='Street and housenumber'
                required={true}
              />
            </Label>
          </Box>
          <Box width={[1,1/2]} pl={3}>
            <Label>
              Address 2
              <Input
                type='text'
                name='addressLine2'
                autoComplete='off'
                value={addressLine2}
                onChange={this.onChange}
                ref={this.addressLine2Input}
              />
            </Label>
          </Box>
        </Flex>

        <Flex flexWrap='wrap'>
          <Box width={[1,1/2,1/4]} pr={3}>
            <Label>
              Zipcode
              <Input
                type='text'
                name='addressZip'
                autoComplete='billing postal-code'
                value={addressZip}
                onChange={this.onChange}
                ref={this.addressZipInput}
                placeholder='ZIPCODE'
                required={true}
              />
            </Label>
          </Box>
          <Box width={[1,1/2, 3/4]} pl={3}>
            <Label>
              City
              <Input
                type='text'
                name='addressCity'
                autoComplete='billing address-level2'
                value={addressCity}
                onChange={this.onChange}
                ref={this.addressCityInput}
                required={true}
                placeholder='City'
              />
            </Label>
          </Box>
        </Flex>

        <Flex flexWrap='wrap'>
          <Box width={[1,1/2]} pr={3}>
            <Label>
              State
              <Input
                type='text'
                name='addressState'
                autoComplete='off'
                value={addressState}
                onChange={this.onChange}
                ref={this.addressStateInput}
                placeholder='State (optional)'
              />
            </Label>
          </Box>
          <Box width={[1,1/2]} pl={3}>
            <Label>
              Country
              <Input
                type='text'
                name='addressCountry'
                autoComplete='billing country-code'
                value={addressCountry}
                onChange={this.onChange}
                ref={this.addressCountryInput}
                required={true}
                placeholder='Billing country'
              />
            </Label>
          </Box>
        </Flex>

        <Button 
          variant='primary' 
          type='submit'
          my={3}>Save</Button>
      </form>
    )
  }
}

export default AccountForm



const UPDATE_ACCOUNT = gql`
  mutation UpdateAccount ($name: String!, $addressName: String!, $accountEmail: String!, $addressCompany: String!, $addressLine1: String!, $addressLine2: String!, $addressCity: String!, $addressState: String, $addressZip: String!, $addressCountry: String!, $vatId: String) {
    updateAccount (name: $name, addressName: $addressName, accountEmail: $accountEmail, addressCompany: $addressCompany, addressLine1: $addressLine1, addressLine2: $addressLine2, addressCity: $addressCity, addressState: $addressState, addressZip: $addressZip, addressCountry: $addressCountry, vatId: $vatId) {
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
`