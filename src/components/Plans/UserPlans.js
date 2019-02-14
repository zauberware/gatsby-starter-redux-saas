
import React, { Fragment, Component } from 'react'
import { Container, Heading, Card, Flex, Button, Box, Link } from '@magicsoup.io/stock'
import { navigate } from '@reach/router'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { P } from '../../styled'
import client from '../../apollo/client'
import { StripeCheckout } from '..';

import { Elements, injectStripe } from 'react-stripe-elements'
import ThankYou from './ThankYou';
import { WeWillMissYou } from '.';


const GET_PLANS = gql`
  query {
    allPlans{
      id
      name
      description
      formattedPrice
      featured
    }

    me{
      subscriptions{
        id
        status
        startDate
        cancelAt
        cancelAtPeriodEnd
        plan{
          id
          name
          description
          formattedPrice
        }
      }
    }
  }
`

const CANCEL_SUBSCRIPTION = gql`
  mutation CancelSubscription ($planId: Int!) {
    cancelSubscription (planId: $planId)
  }
`

const CREATE_SUBSCRIPTION = gql`
  mutation CreateSubscription ($planId: Int!, $paymentGatewayToken: String!) {
    createSubscription (planId: $planId, paymentGatewayToken: $paymentGatewayToken)
  }
`



class UserPlans extends Component {

  constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
    this.onRestart = this.onRestart.bind(this)
    this.state = {
      selectedPlan: null,
      formState: null, // start | canceled | finished
    }
  }

  selectPlan(selectedPlan) {
    this.setState({ 
      selectedPlan,
      formState: 'start',
    })
  }

  async submit(stripe) {
    const { selectedPlan } = this.state
    // Generate token to store credit card info etc.
    const {token, error} = await stripe.createToken({
      name: "Name",
      // TODO ADD MORE
    })

    if(error || !token.id){
      console.log('Error token creation')
    }else{
      
      const planId = parseInt(selectedPlan.id)
      const { data } = await client.mutate({
        mutation: CREATE_SUBSCRIPTION,
        variables: {
          planId,
          paymentGatewayToken: token.id,
        },
      })

      if (data.createSubscription){
        this.setState({ 
          selectedPlan: null,
          formState: 'finished',
        })
      }
    }
    
  }

  async cancelPlan(plan) {
    const planId = parseInt(plan.id)
    
    const { data } = await client.mutate({
      mutation: CANCEL_SUBSCRIPTION,
      variables: {
        planId,
      },
    })

    if (data.cancelSubscription){
      this.setState({ formState: 'canceled' })
    }

  }

  onRestart() {
    this.setState({ 
      selectPlan: null,
      formState: null,
    })
  }

  render () {
    const { selectedPlan, formState } = this.state
    return (
      <Container>
        <Query query={GET_PLANS}>
          {({ loading, error, data }) => {
            if (loading) return "Loading..."
            if (error) return `Error! ${error.message}`

            return (
              <Fragment>

                {formState == 'finished' && 
                  <ThankYou />
                }

                {!formState && 
                  <Fragment>
                    <Heading as='h2' variant='h3' pt={5}>
                      { `Your subscription` }
                    </Heading>

                    {!data.me.subscriptions.length && 
                      <P>You are currently at the free plan</P>
                    }

                    <Flex flexWrap='wrap' alignItems='center'>
                      {data.me.subscriptions.map(subscription => ( 
                        <Card width={[1, 1/2]} p={3} key={`subscription-${subscription.id}`}>
                          <P fontSize={3}>
                            {subscription.plan.name}
                          </P>
                          <P>
                            Status: 
                            {subscription.status == 'active' && subscription.cancelAtPeriodEnd ? <strong> Canceled to end of period</strong> : <strong> {subscription.status}</strong>}
                            <br/>
                            Creation date: {subscription.startDate}
                            <br/>
                            {subscription.status == 'active' && subscription.cancelAtPeriodEnd && <Fragment>Will end: {subscription.cancelAt}</Fragment> }
                          </P>
                          {!subscription.cancelAtPeriodEnd && 
                            <Link
                              variant={'primary'} 
                              onClick={() => this.cancelPlan(subscription.plan)}>
                              Cancel plan
                            </Link>
                          }
                        </Card>
                      ))}
                    </Flex>
                  </Fragment>
                }

                {!formState && 
                  <Fragment>
                    <Heading as='h2' variant='h3' pt={5}>
                      { data.me.subscriptions.length ? `Change plan` : `Select plan` }
                    </Heading>

                    <Flex flexWrap='wrap' alignItems='center'>
                      {data.allPlans.map(plan => (
                        <Box width={[1, 1/3]} p={3} key={`plan-${plan.id}`}>
                          <Card variant={plan.featured ? 'primary' : 'pricing'}>
                            <Heading 
                              as='h2' 
                              variant='h4'
                            >
                              {plan.name}
                            </Heading>
                            <P 
                              fontSize={plan.featured ? 6 : 5} 
                              fontWeight={300}>
                              {plan.formattedPrice}
                            </P>
                            <P mb={4}>
                              {plan.description}
                            </P>
                            {
                              data.me.subscriptions.filter(sub => (
                                !sub.cancelAtPeriodEnd && sub.plan.id == plan.id
                              )).length
                              ? <Button
                                  variant={plan.featured ? 'white' : 'primary'} 
                                  onClick={() => this.cancelPlan(plan)}>
                                  Cancel plan
                                </Button>
                              : <Button
                                  variant={plan.featured ? 'white' : 'primary'} 
                                  onClick={() => this.selectPlan(plan)}>
                                  Select plan
                                </Button>
                            }
                          </Card>
                        </Box>
                      ))}
                    </Flex>
                  </Fragment>
                }

                {formState == 'start' && 
                  <Elements>
                    <StripeCheckout 
                      plan={ selectedPlan } 
                      onRestart={ this.onRestart}
                      onSubmit={this.submit} />
                  </Elements>
                }

                {formState == 'canceled' && 
                  <WeWillMissYou />
                }
              </Fragment>
            )
          }}
        </Query>
      </Container>
    )
  }
}

export default UserPlans