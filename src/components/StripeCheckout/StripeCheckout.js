import React, {Component} from 'react';
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement, 
  injectStripe,
} from 'react-stripe-elements';
import { Box, Heading, Button, Flex } from '@magicsoup.io/stock'
import client from '../../apollo/client'
import gql from 'graphql-tag'
import { PaymentRequestButton } from '.';


class CheckoutForm extends Component {

  render() {
    const { onRestart, onSubmit, plan, stripe } = this.props
    return (
      <Box py={3}>
        <Heading as='h2' variant='h3'>Complete the purchase for plan {plan.name}:</Heading>
        
        <Box my={5} >
          <CardElement style={{base: {fontSize: '24px'}}}/>
        </Box>
        <Flex justifyContent='space-between'>
          <Button 
            variant='default'
            onClick={() => onRestart(stripe)}>
            Back
          </Button>
          <Button 
            variant='primary' onClick={() => onSubmit(stripe)}>
            Send
          </Button>
        </Flex>
      </Box>
    )
  }
}

export default injectStripe(CheckoutForm)